document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        const checkScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        // Jalankan saat pertama kali dimuat (antisipasi jika refresh di posisi scrolled)
        checkScroll();

        // Jalankan saat di-scroll
        window.addEventListener('scroll', checkScroll);
    }
});