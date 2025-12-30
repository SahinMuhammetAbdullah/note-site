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
                
                // 1. Ana başlık, kategori veya etiket eşleşmesi (Normal Makale Linki)
                if (post.title.toLowerCase().includes(q) || 
                    post.category.toLowerCase().includes(q) || 
                    (post.tags && post.tags.toLowerCase().includes(q))) {
                    filteredResults.push({ title: post.title, url: post.url, date: post.date, type: 'post' });
                }

                // 2. Alt başlık (##) eşleşmesi (Çıpalı Link)
                if (post.headers && post.headers.toLowerCase().includes(q)) {
                    const headers = post.headers.split(' | ');
                    headers.forEach(h => {
                        if (h.toLowerCase().includes(q) && h.includes('#')) {
                            const [hText, hAnchor] = h.split('#');
                            filteredResults.push({ 
                                title: hText, 
                                subtitle: post.title, // Hangi makalede olduğunu belirtmek için
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
                    // Tipine göre başlık formatını ayarla
                    const displayTitle = res.type === 'header' ? `<b>${res.title}</b> <small style="opacity:0.6">(${res.subtitle})</small>` : res.title;
                    
                    resultsContainer.innerHTML += `
                        <a href="${res.url}" class="search-result-item">
                            <span class="res-title">${displayTitle}</span>
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