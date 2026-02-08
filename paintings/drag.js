document.querySelectorAll(".drag").forEach(element => {
    let offsetX, offsetY, isDragging = false;
    element.addEventListener("pointerdown", (event) => {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
        element.style.position = "absolute";
        element.style.zIndex = "1000";
    });

    document.addEventListener("pointermove", (event) => {
        if (!isDragging) return;
        element.style.left = `${event.clientX - offsetX}px`;
        element.style.top = `${event.clientY - offsetY}px`;
    });

    document.addEventListener("pointerup", () => {
        isDragging = false;
    });
})
