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
});