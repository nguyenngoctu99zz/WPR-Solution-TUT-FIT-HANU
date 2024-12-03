/*
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - setup the demo button to change the image on click.
   */
  function init() {
    const a = document.getElementById("demo-btn");
    a.addEventListener('click', change)
  }

  function change() {
    const images = document.querySelectorAll("img"); 
    images.forEach(img => {
      img.src = "mystery.gif"; 
    });
  }

})();