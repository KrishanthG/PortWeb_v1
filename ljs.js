document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.project-carousel');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    // Auto-scroll every 4 seconds
    setInterval(() => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }, 4000);

    // Next/Previous button functionality
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    // Initialize LJS for scroll-triggered animations
    ljs.init();
});
