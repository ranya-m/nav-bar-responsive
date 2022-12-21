let body = document.querySelector("body");
let menuDropDiv =  document.getElementById("menuDrop");
let toggleButton = document.getElementsByTagName("i")[0];

// menuDropDiv.style.display = "block";
// toggleButton.addEventListener("click", menuDropOnClick);

toggleButton.onclick = function() {
    menuDropDiv.classList.toggle("active");
}

