// Make sure to use the container element, not the image itself
var container = document.getElementById("image-container1");

// variables to track mouse position and dragging state
var isMouseDown = false;
var offsetX, offsetY;

// 1. When the mouse button is pressed down on the container
container.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    // Calculate the offset from the top-left of the container to the mouse position
    offsetX = e.clientX - container.getBoundingClientRect().left;
    offsetY = e.clientY - container.getBoundingClientRect().top;
});

// 2. When the mouse moves anywhere on the document
document.addEventListener('mousemove', function(e) {
    if (isMouseDown) {
        // Calculate the new position based on current mouse position and the initial offset
        var newX = e.clientX - offsetX;
        var newY = e.clientY - offsetY;

        // Update the container's position in real-time
        container.style.left = newX + "px";
        container.style.top = newY + "px";
    }
});

// 3. When the mouse button is released anywhere on the document, stop dragging
document.addEventListener('mouseup', function() {
    isMouseDown = false;
});