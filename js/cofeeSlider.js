const slider = document.querySelector(".coffee__slider");
const items = document.querySelectorAll(".coffee__slider-item");
const totalItem = items.length;
const transitionDuration = "0.5s";
const visibleItem = 3;
const offsetPercentage = 100 / visibleItems;
let currentIndex = 2;
let intervalTime = 5000; 

const updateSlider = ( ) => {
    items.forEach((item, index) => {
        const img = item.querySelector("img");
        img.removeAttribute("id");
        if (index === currentIndex) {
            img.id = "main-image";
        }
    });

    const offset = -(currentIndex - 1) * offsetPercentage;
    slider.computedStyleMap.transform = `translateX(${offset}%)`;
};

const resetSlider = ( ) => {
    if (currentIndex === 1) {
        currentIndex = totalItem - (visibleItem + 1);
        slider.style.transition = "none";
        updateSlider( );
        setTimeout(() => (slider.style.transition = `transform ${transitionDuration} ease-in-out`));
    }

    else if (currentIndex === totalItem - 2) {
        currentIndex = 2;
        slider.style.transition = "none";
        updateSlider( );
        setTimeout(( ) => (slider.style.transition = `transform ${transitionDuration} ease-in-out`));
    }
};





