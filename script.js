//dark mode toggle (turn off the lights)
document.getElementById("dark-btn").addEventListener("click", () => {
    toggleClassOnElements(".box", "dark");
    document.body.classList.toggle("dark");
})

//reveal image for one class only, remember to copy/paste and change the src image
document.getElementById("reveal-btn").addEventListener("click", () => {
    document.querySelector(put image here).style.opacity = "1";
    document.getElementById("reveal-btn").style.display = "none";
});

//draggable function with html class .drag
document.querySelectorAll(".drag").forEach(element => {
    let offsetX, offsetY, isDragging = false;
    element.addEventListener("pointerdown", (event) => {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
        element.style.position = "absolute";
        element.style.zIndex = "1000";
    });