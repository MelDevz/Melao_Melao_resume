const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(navLink => {
    navLinks.addEventListener('click', () => {
        navLinks.classList.add('active');
    });
});