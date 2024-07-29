// Scripts for my code

console.log("Hello World")


const firstName = document.getElementById("first-name");

firstName.addEventListener("input",(event)=>{

    if (firstName.validity.typeMismatch) {
        firstName.setCustomValidity("1-20 chars, at least 1 letter");
      } else {
        firstName.setCustomValidity("");
      }

})