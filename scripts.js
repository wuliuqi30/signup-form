// Scripts for my code

console.log("Hello World")





const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error");

// Set Validation Inputs
let nameMinLength = 1;
let nameMaxLength = 20;

// Name Pattern Matching: 

let namePattern = `^(?=.*[a-zA-Z])[a-zA-Z0-9\\\-\'\ ]+$`;
firstName.setAttribute("pattern", namePattern);
firstName.setAttribute("minlength", nameMinLength);
firstName.setAttribute("maxlength", nameMaxLength);

firstName.addEventListener("input", (event) => {
  firstNameError.textContent = '';
  if (firstName.validity.valid) {
    firstName.classList.add("correct");
  } else 
  {
    firstName.classList.remove("correct");
  }
});

form.addEventListener("submit", (event) => {
  if (firstName.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    firstNameError.textContent = "You need to enter a first name.";
  } else if (!firstName.validity.valid) {
    showFirstNameError();
    event.preventDefault();
  }

});

function showFirstNameError() {

  if (firstName.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    firstNameError.textContent = "You need to enter a first name.";
  } else if (firstName.validity.tooShort) {
    firstNameError.textContent = `Please Enter at least ${firstName.minLength} character(s)`;
  } else if (firstName.validity.patternMismatch) {
    firstNameError.textContent = "Please enter with correct pattern";
  }
  // Set the styling appropriately
  firstNameError.className = "error active";
}


// Last Name
const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name + span.error");
lastName.setAttribute("pattern", namePattern);
lastName.setAttribute("minlength", nameMinLength);
lastName.setAttribute("maxlength", nameMaxLength);

lastName.addEventListener("input", (event) => {
  lastNameError.textContent = '';
   if (lastName.validity.valid) {
    lastName.classList.add('correct');
  } else {
    lastName.classList.remove('correct');
  }
});

form.addEventListener("submit", (event) => {
  if (!lastName.validity.valid) {
    showLastNameError();
    event.preventDefault();
  }

});

function showLastNameError() {

  if (lastName.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    lastNameError.textContent = "You need to enter a last name.";
  } else if (lastName.validity.tooShort) {
    lastNameError.textContent = `Please Enter at least ${lastName.minLength} character(s)`;
  } else if (lastName.validity.patternMismatch) {
    lastNameError.textContent = "Please enter with correct pattern";
  }
  // Set the styling appropriately
  lastNameError.className = "error active";
}




// Email Matching:
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
emailPattern = `^[\\w]+@[\\w]+\\.[\\w]+$`
email.setAttribute("pattern", emailPattern);


email.addEventListener("input", (event) => {
  emailError.textContent = '';
  if (email.validity.valid) {
    email.classList.add('correct');
  } else {
    email.classList.remove('correct');
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }

});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "Don't forget to put your email address.";
  } else if (email.validity.patternMismatch) {
    emailError.textContent = "Please enter a valid email address!";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address!";
  }
  // Set the styling appropriately
  emailError.className = "error active";
}



// Phone Number Validation
const phone = document.getElementById("phone-number");
const phoneError = document.querySelector("#phone-number + span.error");
phonePattern = `^\\d{3}(\-?\\d{3})(\-?\\d{4})$`
phone.setAttribute("pattern", phonePattern);

phone.addEventListener("input", (event) => {
  phoneError.textContent = '';
  if (phone.validity.valid) {
    phone.classList.add('correct');
  } else {
    phone.classList.remove('correct');
  }  
});

form.addEventListener("submit", (event) => {
  if (!phone.validity.valid) {
    showPhoneError();
    event.preventDefault();
  }

});

function showPhoneError() {
  if (phone.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    phoneError.textContent = "Don't forget to put your phone number!";
  } else if (phone.validity.patternMismatch) {
    phoneError.textContent = "Please enter a valid phone number!";
  } else if (phone.validity.typeMismatch) {
    phoneError.textContent = "Please enter a valid  phone number!";
  }
  // Set the styling appropriately
  phoneError.className = "error active";
}



// Password Validation: 
const minPwLength = 8;
const maxPwLength = 25;
const pwPattern = `^(?=.*[a-z])(?=.*\\d)(?=.*[A-Z]).{${minPwLength},${maxPwLength}}$`;
const pwPlaceholder = `${minPwLength}-${maxPwLength} chars, at least 1 letter, capital, and number`
const pw = document.getElementById("password");
const pwError = document.querySelector("#password + span.error");
pw.setAttribute("pattern", pwPattern);
pw.setAttribute("placeholder", pwPlaceholder);

pw.addEventListener("input", (event) => {
  pwError.textContent = '';
  if (pw.validity.valid) {
    pw.classList.add('correct');
    
  } else {
    pw.classList.remove('correct');
  }  

});

form.addEventListener("submit", (event) => {
  if (!pw.validity.valid) {
    showPwError();
    event.preventDefault();
  }
});

function showPwError() {
  if (pw.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    pwError.textContent = "You need to enter a password.";
  } else if (pw.validity.patternMismatch) {
    pwError.textContent = pwPlaceholder;
  }
  // Set the styling appropriately
  pwError.className = "error active";
}

function togglePw(){
  if (pw.type === "password"){
  pw.type = "text"} 
  else {
    pw.type = "password";
  }

}



// Confirm password:
const pwConfirm = document.getElementById("confirm-password");
const pwConfirmError = document.querySelector("#confirm-password + span.error");

pwConfirm.addEventListener("input", (event) => {
  pwConfirmError.textContent = '';
  if (pwConfirm.value === pw.value && pw.validity.valid) {
    pwConfirm.classList.add('correct');
  } else {
    pwConfirm.validity.valid = false;
    pwConfirm.classList.remove('correct');
  }
});

form.addEventListener("submit", (event) => {
  if (!pw.validity.valid) {
    showPwConfirmError();
    event.preventDefault();
  }

});

function showPwConfirmError() {
  if (pw.validity.valueMissing) {
    pwConfirmError.textContent = "You still need to confirm password.";
  } else if(pwConfirm.value !== pw.value) {
  pwConfirmError.textContent = "Passwords Don't Match";
  }
  // Set the styling appropriately
  pwConfirmError.className = "error active";
}


function toggleConfirmPw(){
  if (pwConfirm.type === "password"){
    pwConfirm.type = "text"} 
  else {
    pwConfirm.type = "password";
  }

}
