const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}


const brandCarousel = document.getElementById('brandCarousel');
        const carousel = new bootstrap.Carousel(brandCarousel, {
            interval: 2000, // 2 seconds
            wrap: true // Loop back to the first slide
        });