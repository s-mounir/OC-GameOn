function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate form
function validate(e){
  let validForm = true;

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").valueAsNumber;
  const locationCheckbox = document.querySelector('input[name="location"]:checked');
  const conditionsGenerales = document.getElementById("checkbox1");
  const formData = document.getElementsByClassName("formData");

  if((first.length < 2) || (first === "")){
    validForm = false;
  }
  if((last.length < 2) || (last === "")){
    validForm = false;
  }
  if(!email.match(validRegex)){
    validForm = false;
  }
  if((typeof quantity !== "number") || (isNaN(quantity))){
    validForm = false;
  }
  if((locationCheckbox === null)){
    validForm = false;
  }
  if(!conditionsGenerales.checked){
    validForm = false;
  }

  console.log(validForm);
  if(!validForm){
    e.preventDefault();
    console.log("le formulaire est faux");
  }else{
    console.log("tout est bon!");
  }

  console.log(validForm);
  return validForm;
}