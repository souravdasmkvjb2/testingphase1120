// Simple Form Alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Shukriya! Aapka message bhej diya gaya hai.');
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#111';
    } else {
        navbar.style.background = '#222';
    }
});
