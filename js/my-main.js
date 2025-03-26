'use strict';



(function () {

  
  const btn = document.querySelector(".article__tgl");
    const hiddenTxt = document.querySelector(".togle_txt__hidden");   
    if (btn && hiddenTxt) {
        hiddenTxt.style.display = "none";
        btn.addEventListener("click", function() {
            btn.classList.toggle('is-active');
        if (hiddenTxt.style.display == "block") {
            hiddenTxt.style.display = "none";
            btn.innerHTML = "Раскрыть";
        } else {
            hiddenTxt.style.display = "block";
            btn.innerHTML = "Свернуть"; 
        }
    });
}    
  
})();
