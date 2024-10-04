const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active'); // Toggle 'active' class on click
});
