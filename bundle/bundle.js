"use strict";
window.onload = function () {
    var el = document.getElementById('link');
    if (el) {
        var definitelyAnElement = el;
    }
};
window.onload = function () {
    document.getElementById('link').style.opacity = 1;
};
// retrieve the element
var element = document.getElementById("link");
// reset the transition by...
element.addEventListener("click", function (e) {
    e.preventDefault;
    // -> removing the class
    element.classList.remove("run-animation");
    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
    // element.offsetWidth = element.offsetWidth;
    void element.offsetWidth;
    // -> and re-adding the class
    element.classList.add("run-animation");
}, false);
//# sourceMappingURL=bundle.js.map