const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');
const frame = document.querySelector('.frame');

const slides = document.querySelectorAll('.slide');
const length = slides.length;
let slideNumber = 0; 
const SLIDE_INTERVAL = 4000;

const getSlideWidth = () => {
    return frame.clientWidth;
};

const updateSlideTransform = () => {
     const slideWidth = getSlideWidth();
     slider.style.transform = `translateX(-${slideNumber * slideWidth}px)`;
};

window.addEventListener('resize', updateSlideTransform);

const nextSlide = () => {
    slideNumber = (slideNumber + 1) % length;
    updateSlideTransform();
};

const prevSlide = () => {
    slideNumber = (slideNumber - 1 + length) % length;
    updateSlideTransform();
};

const startAutoSlide = () => {
    setInterval(() => {
        nextSlide();
    }, SLIDE_INTERVAL);
};

right.addEventListener('click', () => {
    nextSlide();
});
     
left.addEventListener('click', () => {
    prevSlide();
});

const allRatingContainers = document.querySelectorAll('.star-rating');

allRatingContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');

    stars.forEach((star, index1) => {
        star.addEventListener('click', () => {
            const current_star_level = index1 + 1;
            
            stars.forEach((star, index2) => {
                if (current_star_level >= index2 + 1) {
                    star.innerHTML = '&#9733;';
                } else {
                    star.innerHTML = '&#9734;';
                }
            });
        });
    });
});

updateSlideTransform();
startAutoSlide();