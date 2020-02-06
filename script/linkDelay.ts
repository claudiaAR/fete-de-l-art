

   let fade1 = document.getElementById('link1')
   let fade2 = document.getElementById('link2')
   let fade3 = document.getElementById('link3')
   let fade4 = document.getElementById('link4')
window.onload = function() {
    if (fade1) {
        fade1.style.opacity = "5";
    } else if(fade2) {
        fade2.style.opacity = "5";
    } else if(fade3) {
        fade3.style.opacity = "5";
    } else if(fade4) {
        fade4.style.opacity = "5";
    } else {
        return null
    }
   
}