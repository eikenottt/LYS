window.onload = function() {
    const lSwitch = document.querySelector("img");
    const overlay = document.querySelector("#switch");

    lSwitch.addEventListener("click", function() {
        lSwitch.setAttribute("src", "images/switch_on.svg");
        removeOverlay();
    });

    function removeOverlay() {
        overlay.classList.add("fadeOut");
        setTimeout(function (){overlay.remove()}, 1000);
    }
};