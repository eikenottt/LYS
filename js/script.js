//This website was created by candidate nr: 107, 106 and 114
// Controls the light switch animations
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