const htmlNode = document.documentElement; 
const bodyNode = document.body;       

function animateWithRandomPause() {
    htmlNode.classList.remove('is-animating');
    bodyNode.classList.remove('is-animating');

    void htmlNode.offsetWidth; 

    htmlNode.classList.add('is-animating');
    bodyNode.classList.add('is-animating');
    const randomPause = Math.random() * 2000 + 1000;

    setTimeout(animateWithRandomPause, 4000 + randomPause);
}

animateWithRandomPause();

document.addEventListener("DOMContentLoaded", function() {
    
    const carousels = document.querySelectorAll(".CarouselWrapper");

    carousels.forEach(carousel => {
        let currentIndex = 0; 
        const carouselSlides = carousel.querySelectorAll(".Slide"); 
        
        const btnNext = carousel.querySelector(".BtnNext");
        const btnPrev = carousel.querySelector(".BtnPrev");

        function updateCarousel() {
            carouselSlides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.style.left = "50%"; 
                } else if (index < currentIndex) {
                    slide.style.left = "-100%"; 
                } else {
                    slide.style.left = "150%"; 
                }
                
                if(slide.tagName.toLowerCase() === 'video' && index !== currentIndex) {
                    slide.pause();
                }
            });
        }
        
        updateCarousel();

        if (btnNext) {
            btnNext.addEventListener("click", function() {
                currentIndex++;
                if (currentIndex >= carouselSlides.length) {
                    currentIndex = 0;
                }
                updateCarousel();
            });
        }
        
        if (btnPrev) {
            btnPrev.addEventListener("click", function() {
                currentIndex--; 
                if (currentIndex < 0) {
                    currentIndex = carouselSlides.length - 1;
                }
                updateCarousel();
            });
        }
    });
    
});