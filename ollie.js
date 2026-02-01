var ollie = document.getElementById("img");
var link = document.getElementById("link");
link.addEventListener("click", move);

var ollieX = 0;
function move(e) {
   ollieX += 280;
   ollie.style.position = "relative";
   ollie.style.transform = "translateX(" + ollieX + "px)";
   e.preventDefault();
}