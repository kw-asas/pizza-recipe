document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    // Automatic sliding every 3 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the start
        updateCarousel();
    }, 3000);

    // Adjust carousel layout on window resize
    window.addEventListener('resize', updateCarousel);
});
