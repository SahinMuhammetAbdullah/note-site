
document.addEventListener('DOMContentLoaded', () => {
    const infoBtn = document.getElementById('infoMobileBtn');
    const infoPanel = document.getElementById('infoMobilePanel');
    const closeBtn = document.getElementById('closeInfoPanel');

    // Paneli Aç/Kapat
    if(infoBtn && infoPanel) {
        infoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            infoPanel.classList.toggle('is-active');
            // Panel açıldığında arka plan kaymasını engelle
            document.body.style.overflow = infoPanel.classList.contains('is-active') ? 'hidden' : '';
        });
    }

    // Kapatma butonu
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            infoPanel.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    }

    // Dışarı tıklandığında kapat
    document.addEventListener('click', (e) => {
        if (infoPanel && infoPanel.classList.contains('is-active') && !infoPanel.contains(e.target) && e.target !== infoBtn) {
            infoPanel.classList.remove('is-active');
            document.body.style.overflow = '';
        }
    });
});