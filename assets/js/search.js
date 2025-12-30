document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('.search-box input, .mobile-search input');
    
    // Sonuçların görüneceği bir alan oluştur (Eğer yoksa)
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results-list';
    resultsContainer.className = 'search-results-overlay';
    document.body.appendChild(resultsContainer);

    let searchData = [];

    // Verileri bir kez çek
    fetch('/search.json')
        .then(response => response.json())
        .then(data => searchData = data);

    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            resultsContainer.innerHTML = ''; // Temizle

            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }

            const filtered = searchData.filter(post => 
                post.title.toLowerCase().includes(query) || 
                post.category.toLowerCase().includes(query) ||
                post.tags.toLowerCase().includes(query) // Etiketlerde de ara
            );

            if (filtered.length > 0) {
                resultsContainer.style.display = 'block';
                filtered.forEach(post => {
                    resultsContainer.innerHTML += `
                        <a href="${post.url}" class="search-result-item">
                            <span class="res-title">${post.title}</span>
                            <span class="res-date">${post.date}</span>
                        </a>`;
                });
            } else {
                resultsContainer.innerHTML = '<div class="search-result-item">Sonuç bulunamadı...</div>';
                resultsContainer.style.display = 'block';
            }
        });
    });

    // Boşluğa tıklayınca kapat
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box') && !e.target.closest('.mobile-search')) {
            resultsContainer.style.display = 'none';
        }
    });
});