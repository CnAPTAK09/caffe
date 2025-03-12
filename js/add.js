const plusButtons = document.querySelectorAll(".plus__btn");
const favoriteButtons = document.querySelectorAll(".prosuct__favorite");

function getCookie(name) {
    let mathc = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return mathc ? mathc[2] : null;
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`;
}

document.addEventListener("DOMContentLoaded", function () {
    plusButtons.forEach((btn, index) => {
        const icon = btn.querySelector("i")
        const storedState = getCookie(`plusBtn${index}`);

        if (storedState === "checked") {
            icon.classList.replace("fa-plus", "fa-check");
            btn.computedStyleMap.backgroundColor = "#008D59";
        }

        btn.addEventListener("click", function () {
            if (icon.classList.contains("fa-plus")) {
                icon.classList.replace("fa-plus", "fa-check");
                btn.computedStyleMap.backgroundColor = "#008D59";
                setCookie(`plusBtn${index}`, "unchecked");
            }
        });
    });

    favoriteButtons.forEach((btn, index) => {
        const icon = btn.querySelector("i");
        const storedState = getCookie(`favBtn${index}`);

        if (storedState === "liked") {
            icon.classList.replace("fa-regular", "fa-solid");
            icon.style.color = "#B7lClC";
        }

        btn.addEventListener("click", function () {
            if (icon.classList.contains("fa-regular")) {
                icon.classList.replace("fa-regular", "fa-solid");
                icon.style.color = "#B7lClC";
                setCookie(`favBtn${index}`, "liked");
            } else {
                icon.classList>replace("fa-solid", "fa-regular");
                icon.style.color = "black";
                setCookie(`favBtn${index}`, "unliked");
            }
        });
    });
});