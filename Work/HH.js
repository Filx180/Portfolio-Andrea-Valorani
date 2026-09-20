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

document.addEventListener('contextmenu', function(e) {
if (e.target.tagName === 'IMG') {
e.preventDefault();
}
});

function ScrollToTop() {
    const wrapper = document.querySelector('.Wrapper');
    if (wrapper) {
        wrapper.scrollTo({ top: 0, behavior: 'smooth' });
    }
}


animateWithRandomPause();