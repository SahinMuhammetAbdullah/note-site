document.addEventListener("DOMContentLoaded", function () {
    mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        flowchart: {
            useMaxWidth: true, // Sayfaya sığdır ama fontu CSS ile koru
            nodeSpacing: 60,    // Kutuların yan yana mesafesi
            rankSpacing: 80,    // Katmanların (yukarı-aşağı) mesafesi
            padding: 20
        }
    });

    const codeBlocks = document.querySelectorAll('.language-mermaid');
    codeBlocks.forEach(function (block) {
        const rawContent = block.innerText || block.textContent;
        const container = document.createElement('div');
        container.className = 'mermaid-wrapper';

        const btn = document.createElement('button');
        btn.innerHTML = '🔍 Tam Ekran';
        btn.className = 'mermaid-view-btn';

        const div = document.createElement('div');
        div.className = 'mermaid';
        div.innerHTML = rawContent.trim();

        container.appendChild(btn);
        container.appendChild(div);

        btn.addEventListener('click', function () {
            const isActive = container.classList.toggle('is-active');
            btn.innerHTML = isActive ? '✕ Kapat' : '🔍 Tam Ekran';
            btn.style.background = isActive ? '#e74c3c' : '#78623c';
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        const pre = block.closest('pre');
        if (pre) pre.parentNode.replaceChild(container, pre);
    });

    mermaid.run();
});