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
    const slides = document.querySelectorAll('.Slide');

    slides.forEach(img => {
        const originalSrc = img.src;
        const sketchSrc = img.dataset.sketch;
        const fullPage = document.querySelector('#fullpage');

        img.addEventListener('click', function() {
            fullPage.style.backgroundImage = 'url(' + img.src + ')';
            fullPage.style.display = 'block';
        });

        if (sketchSrc) {
            const preloadImg = new Image();
            preloadImg.src = sketchSrc;

            let isSketch = false;
            let isAnimating = false; 

            img.addEventListener('Sketch', () => {
                if (isAnimating) return;
                isAnimating = true;

                img.style.animation = "fadeToggle 0.6s ease-in-out";

                setTimeout(() => {
                    if (isSketch) {
                        img.src = originalSrc;
                        isSketch = false;
                    } else {
                        img.src = sketchSrc;
                        isSketch = true;
                    }
                }, 250); 

                setTimeout(() => {
                    img.style.animation = "";
                    isAnimating = false;
                }, 500);
            });

          
        }
    });

    const carousels = document.querySelectorAll(".CarouselWrapper");

    carousels.forEach(carousel => {
        let currentIndex = 0; 
        const carouselSlides = carousel.querySelectorAll(".Slide"); 
        
        const btnNext = carousel.querySelector(".BtnNext");
        const btnPrev = carousel.querySelector(".BtnPrev");
        const btnSketch = carousel.querySelector(".BtnSketch");

        function updateCarousel() {
            carouselSlides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.style.left = "50%"; 
                } else if (index < currentIndex) {
                    slide.style.left = "-100%"; 
                } else {
                    slide.style.left = "150%"; 
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

        if (btnSketch){
            btnSketch.addEventListener("click", function() {
                const activeSlide = carouselSlides[currentIndex];
                if (activeSlide) {
                    const sketchEvent = new CustomEvent("Sketch", { bubbles: true });
                    activeSlide.dispatchEvent(sketchEvent);
                }
            })
        }
    });
});