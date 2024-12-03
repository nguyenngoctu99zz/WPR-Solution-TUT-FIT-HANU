/*
 * Capitalizing text of all paragraphs
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init(){
    let btn= document.getElementById('capitalize')
      btn.addEventListener('click', capitalize)
  }
  function capitalize() {
    let paragraphs= document.querySelectorAll('p')
    for (let i= 0; i<paragraphs.length; i++){
      paragraphs[i].innerHTML= paragraphs[i].textContent.toUpperCase()
    }
  }

})();