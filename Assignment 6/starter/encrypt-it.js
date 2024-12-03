/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  //const encrypt_it_button = document.getElementById("encrypt-it");
  //encrypt_it_button.addEventListener("click", handleClick);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window Loaded!");
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleClick() {
    console.log("Button Clicked! (encrypt-it)");

    var plainText = document.getElementById("input-text").value;
    var cipherText = shiftCipher(plainText);
    console.log(cipherText);
    document.getElementById("result").innerHTML = cipherText;
  }

  function handleReset() {
    console.log("Button Clicked! (reset)")

    document.getElementById("input-text").value = "";
  }

  function shiftCipher(text) {
    //text = text.toLowerCase();

    let result = "";

    for (let i = 0; i < text.length; i++) {
      if ((text[i] >= 'a' && text[i] < 'z') || (text[i] >= 'A' && text[i] < 'Z'))
        result += String.fromCharCode(text.charCodeAt(i) + 1);
      else if (text[i] == 'z' || text[i] == 'Z')
        result += String.fromCharCode(text.charCodeAt(i) - 25);
    }
    return result;
  }

})();
