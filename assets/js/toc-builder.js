document.addEventListener('DOMContentLoaded', function () {
    var content = document.querySelector('.note-article .note-content');
    var target = document.getElementById('dynamic-toc-target');
    if (!content || !target) return;

    var headings = content.querySelectorAll('h1,h2,h3,h4,h5,h6');
    if (headings.length === 0) {
        target.innerHTML = '<p style="opacity:.8;font-size:.95rem">Bu not için başlık (h1-h6) bulunamadı.</p>';
        return;
    }

    // Helper: slugify başlık metnini id yapmak için
    function slugify(text) {
        return text.toString().trim().toLowerCase()
            .replace(/[\u0300-\u036f]/g, '') // diakritik temizle
            .replace(/[^a-z0-9ğüşöçıİ]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    // Oluşturulacak root ul
    var rootUl = document.createElement('ul');
    rootUl.className = 'toc-root';

    // Stack: her seviye için current parent listesi tutar
    var stack = [{ level: 0, list: rootUl }];

    headings.forEach(function (h) {
        var level = parseInt(h.tagName.substring(1));
        if (!h.id || h.id.trim() === '') {
            var id = slugify(h.textContent);
            // aynı id varsa sonuna sayi ekle
            var base = id;
            var i = 1;
            while (document.getElementById(id)) {
                id = base + '-' + i;
                i++;
            }
            h.id = id;
        }

        var li = document.createElement('li');
        li.className = 'toc-level-' + level;
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent.trim();
        a.setAttribute('data-toc-level', level);
        li.appendChild(a);

        // stack'ten uygun ebeveyn bul (üst seviye < current level)
        while (stack.length && stack[stack.length - 1].level >= level) {
            stack.pop();
        }
        var parentList = stack[stack.length - 1].list;
        parentList.appendChild(li);

        // Prepare new sublist and push to stack
        var subUl = document.createElement('ul');
        li.appendChild(subUl);
        stack.push({ level: level, list: subUl });
    });

    // Boş alt ul'ları kaldır (görsellik için)
    rootUl.querySelectorAll('ul').forEach(function (u) {
        if (!u.children.length) u.remove();
    });

    // Yerleştir
    target.innerHTML = '';
    target.appendChild(rootUl);

    // Smooth scroll davranışı
    target.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var id = this.getAttribute('href').substring(1);
            var el = document.getElementById(id);
            if (!el) return;
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // güncel URL fragment
            try { history.replaceState(null, null, '#' + id); } catch (err) { }
        });
    });
    enableCollapsibleToc();
});

function enableCollapsibleToc() {
    const mainContent = document.querySelector('.note-article .note-content');
    const tocTarget = document.getElementById('dynamic-toc-target');
    if (!mainContent || !tocTarget) return;

    const observerOptions = {
        // Başlıkların ekranın üst %15'lik kısmına girmesini bekler
        rootMargin: '0px 0px -85% 0px',
        threshold: 0
    };

    const allTocLinks = tocTarget.querySelectorAll('a');

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const headingId = entry.target.id;
            const tocLink = document.querySelector(`a[href="#${headingId}"]`);
            if (!tocLink) return;

            const listItem = tocLink.closest('li');

            if (entry.isIntersecting) {
                // 1. Yeni başlık ekrana girdi: Tüm alt/üst aktiflikleri temizle
                allTocLinks.forEach(link => link.classList.remove('is-active'));
                tocTarget.querySelectorAll('li').forEach(li => li.classList.remove('is-parent-active'));

                // 2. Aktif linki işaretle
                tocLink.classList.add('is-active');

                // 3. Üst seviye listeleri aç (Collapsible Logic)
                let parentList = listItem.closest('ul');
                while (parentList && parentList.closest('li')) {
                    parentList.closest('li').classList.add('is-parent-active');
                    parentList = parentList.closest('li').closest('ul');
                }
            }
        });

        // Ekstra Mantık: En üstteki elemanı her zaman aktif tutmak için
        if (window.scrollY < 100) {
            tocTarget.querySelectorAll('li').forEach(li => li.classList.remove('is-parent-active'));
            tocTarget.querySelector('li').classList.add('is-parent-active');
        }
    };

    // Tüm başlıkları gözlemlemeye başla
    const headings = mainContent.querySelectorAll('h1,h2,h3,h4,h5,h6');
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    headings.forEach(heading => {
        observer.observe(heading);
    });
}