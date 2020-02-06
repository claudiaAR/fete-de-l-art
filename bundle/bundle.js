"use strict";
var fade1 = document.getElementById('link1');
var fade2 = document.getElementById('link2');
var fade3 = document.getElementById('link3');
var fade4 = document.getElementById('link4');
window.onload = function () {
    if (fade1) {
        fade1.style.opacity = "5";
    }
    else if (fade2) {
        fade2.style.opacity = "5";
    }
    else if (fade3) {
        fade3.style.opacity = "5";
    }
    else if (fade4) {
        fade4.style.opacity = "5";
    }
    else {
        return null;
    }
};
// retrieve the element
var element = document.getElementById("link1");
// reset the transition by...
element.addEventListener("click", function (e) {
    e.preventDefault;
    // -> removing the class
    element.classList.remove("run-animation");
    // -> triggering reflow /* The actual magic */
    void element.offsetWidth;
    // -> and re-adding the class
    element.classList.add("run-animation");
}, false);
//# sourceMappingURL=bundle.js.map