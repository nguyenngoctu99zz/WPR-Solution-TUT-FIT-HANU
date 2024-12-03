
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    let solveButton = document.querySelector("button");
    solveButton.addEventListener("click", solveEquation);
  }

  

  function solveEquation() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let result = document.getElementById("result");


    

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      result.innerHTML = "Please enter valid numbers for a, b, and c.";
      return;
    }

    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      result.innerHTML = "Phương trình vô nghiệm";
    } else if (discriminant === 0) {
      let x = -b / (2 * a);
      result.innerHTML = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
      let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      result.innerHTML = `Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }
  }
})();