document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('.search-box input, .mobile-search input');
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results-list';
    resultsContainer.className = 'search-results-overlay';
    document.body.appendChild(resultsContainer);

    let searchData = [];
    fetch('/search.json').then(response => response.json()).then(data => searchData = data);

    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            resultsContainer.innerHTML = '';

            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }

            // Mevcut filtreleme mantığın
            const filteredResults = [];
            searchData.forEach(post => {
                const q = query.toLowerCase();

                // 1. ANA BAŞLIK EŞLEŞMESİ
                if (post.title.toLowerCase().includes(q)) {
                    filteredResults.push({ title: post.title, url: post.url, date: post.date, type: 'post' });
                }

                // 2. KATEGORİ EŞLEŞMESİ
                else if (post.category && post.category.toLowerCase().includes(q)) {
                    filteredResults.push({
                        title: post.title,
                        label: `Kategori: ${post.category}`,
                        url: post.url,
                        date: post.date,
                        type: 'meta'
                    });
                }

                // 3. ETİKET EŞLEŞMESİ
                else if (post.tags && post.tags.toLowerCase().includes(q)) {
                    filteredResults.push({
                        title: post.title,
                        label: `Etiket: ${post.tags}`,
                        url: post.url,
                        date: post.date,
                        type: 'meta'
                    });
                }

                // 4. ALT BAŞLIK (##) EŞLEŞMESİ
                if (post.headers && post.headers.toLowerCase().includes(q)) {
                    const headers = post.headers.split(' | ');
                    headers.forEach(h => {
                        if (h.toLowerCase().includes(q) && h.includes('#')) {
                            const [hText, hAnchor] = h.split('#');
                            filteredResults.push({
                                title: hText,
                                subtitle: post.title,
                                url: `${post.url}#${hAnchor}`,
                                date: post.date,
                                type: 'header'
                            });
                        }
                    });
                }
            });

            if (filteredResults.length > 0) {
                resultsContainer.style.display = 'block';
                filteredResults.forEach(res => {
                    let displayHTML = '';

                    if (res.type === 'header') {
                        displayHTML = `<span class="res-title"><b>${res.title}</b></span>
                       <span class="res-subtitle"># ${res.subtitle}</span>`;
                    } else if (res.type === 'meta') {
                        displayHTML = `<span class="res-title">${res.title}</span>
                       <span class="res-badge">${res.label}</span>`;
                    } else {
                        displayHTML = `<span class="res-title">${res.title}</span>`;
                    }

                    resultsContainer.innerHTML += `
        <a href="${res.url}" class="search-result-item">
            <div class="res-content">${displayHTML}</div>
            <span class="res-date">${res.date}</span>
        </a>`;
                });
            } else {
                resultsContainer.innerHTML = '<div class="search-result-item">Sonuç bulunamadı...</div>';
                resultsContainer.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box') && !e.target.closest('.mobile-search')) {
            resultsContainer.style.display = 'none';
        }
    });
});