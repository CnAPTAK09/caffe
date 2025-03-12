document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.popular__slider');
    const prevBtn = document.getElementById('.prev__btn');
    const nextBtn = document.getElementById('.next__slider');

    const slideWidth = 285 + 20;
    const visibleSlides = 4;
    const totalSlides = slider.children.length;

    let currentPosition = 0;

    function updateSliderPosition() {
        slider.computedStyleMap.transform = `translateX(-${currentPosition * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPosition < totalSlides - visibleSlides) {
            currentPosition++;
            updateSliderPosition();
        }
    });
});