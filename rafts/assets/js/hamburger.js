document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');
    const body = document.body;

    // Menüyü Aç
    hamburgerBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        // Menü açılınca arkaplanı kilitle
        body.style.overflow = 'hidden';
    });

    // Menüyü Kapat
    closeBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        // Kaydırmayı tekrar aç
        body.style.overflow = 'auto';
    });

    // Menüdeki linklere tıklanınca menüyü kapat
    const menuLinks = document.querySelectorAll('.mobile-menu-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });
});