"use strict";
(function () {

    window.addEventListener("load", init);

    async function init() {
       let a = await m4();
       console.log(a);
       console.log("hello")
    }

    function m1(value) {
        return value + "Hello2";
    }
    function m4(){
        return "abc";
    }

    function m2(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value + " Hello World");
            }, 2000);
        });
    }

    function m3() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve("Hello3");
            }, 1000);
        });
    }

})();