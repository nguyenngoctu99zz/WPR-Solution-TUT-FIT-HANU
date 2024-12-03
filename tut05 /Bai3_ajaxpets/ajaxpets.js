/**
 * A webpage for fetching cute pet photos.
 * Photos will be populated on the page after the user
 * selects their desired pet type.
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    // TODO
    let inputTags = qsa('input');
    inputTags.forEach(input=>{
      input.addEventListener("click",makeRequest);
    })
  }

  function makeRequest() {
    // TODO
    let value = this.value;
    let URL_API = "https://hanustartup.org/wpr/api/pets/index.php?animal=" + value;
    fetch(URL_API)
          .then(statusCheck)
          .then((res)=>{
            return res.text();
          })
          .then(handleImg)
  }

  function handleImg(value){
    
      let imagePath = value.split("\r\n");
      let a = document.getElementById("pictures");
      a.innerHTML="";
      imagePath.forEach(image=>{
        console.log(image);
        let img = document.createElement("img");
        img.src = image;
        a.append(img)

      })
  }
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }



  function id(id) {
    return document.getElementById(id);
  }

  
  function qs(query) {
    return document.querySelector(query);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
