// Scripts for my code

console.log("Hello World")





const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error");



// Set Validation Inputs
let nameMinLength = 1;
let nameMaxLength = 20;

// Name Pattern Matching: 

let namePattern = `^[a-zA-Z0-9.\\\-]+$`;
firstName.setAttribute("pattern", namePattern);
firstName.setAttribute("minlength", nameMinLength);
firstName.setAttribute("maxlength", nameMaxLength);

firstName.addEventListener("input", (event) => {

  if (firstName.validity.valid) {
    firstNameError.textContent = "";
    firstNameError.className = "error inactive";
  }

  else {
    showFirstNameError();
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

  if (firstName.validity.tooShort) {
    firstNameError.textContent = `Please Enter at least ${firstName.minLength} character(s)`;
  } else if (firstName.validity.patternMismatch) {
    firstNameError.textContent = "Please enter with correct pattern";
  }
  // Set the styling appropriately
  firstNameError.className = "error active";
}



const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name + span.error");
lastName.setAttribute("pattern", namePattern);
lastName.setAttribute("minlength", nameMinLength);
lastName.setAttribute("maxlength", nameMaxLength);

lastName.addEventListener("input", (event) => {

   if (lastName.validity.valid) {
    lastNameError.textContent = "";
    lastNameError.className = "error inactive";

  } else {
    showLastNameError();
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

  if (email.validity.valid) {
    emailError.textContent = "";

  } else {
    showEmailError();
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

  if (phone.validity.valid) {
    phoneError.textContent = "";

  } else {
    showPhoneError();
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

  if (pw.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    pwError.textContent = "Don't forget to put your phone number!";
  } else if (pw.validity.valid) {
    pwError.textContent = null;
    // pwError.className = "error inactive";
  } else {
    showPwError();
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

// Confirm password:

const pwConfirm = document.getElementById("confirm-password");
const pwConfirmError = document.querySelector("#confirm-password + span.error");

pwConfirm.addEventListener("input", (event) => {
  console.log(pwConfirm.value);
  if (pwConfirm.value === pw.value) {
    pwConfirmError.textContent = "";
    pwConfirmError.className = "error inactive";
  } else {
    pwConfirm.validity.valid = false;
    showPwConfirmError();
  }
});

form.addEventListener("submit", (event) => {
  if (!pw.validity.valid) {
    showPwConfirmError();
    event.preventDefault();
  }

});

function showPwConfirmError() {
  pwConfirmError.textContent = "Passwords Don't Match";
  // Set the styling appropriately
  pwConfirmError.className = "error active";
}
