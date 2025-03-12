const startAnimation = (colum, direction) => {
    const speed = 1;
    let scrollAmount = 0;

    const animate = () => {
        if (direction === "up") {
            colum.scrollTop += speed;
            scrollAmount += speed;
        } else {
            column.scrollTop -= speed;
            scrollAmount -= speed;
        }

        if (direction === "up" && scrollAmount >= column.scrollHeight / 2) {
            column.scrollTop = 0;
        } else if (direction === "down" && scrollAmount <= 0) {
            column.scrollTop = column.scrollHeight / 2;
            scrollAmount = column.scrollHeight / 2;
        }

        requestAnimationFrame(animate);
    };

    column.innerHTML += column.innerHTML;

    setTimeout(() => requestAnimationFrame(animate), 100);
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".column-up"). forEach(column => startAnimation(column, "up"));
    document.querySelectorAll(".column-down").forEach(column => startAnimation(column, "down"));
});