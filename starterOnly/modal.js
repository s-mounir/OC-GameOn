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
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").valueAsNumber;
  const locationCheckbox = document.querySelector('input[name="location"]:checked');
  const conditionsGenerales = document.getElementById("checkbox1");
  const formData = document.getElementsByClassName("formData");

  if((first.length < 2) || (first === "")){
    validForm = false;
    const firstError = document.createElement("p");
    firstError.classList.add("errorMessage");
    firstError.innerText = "Veillez entrer 2 caractères ou plus pour le champ du prénom";
    formData[0].appendChild(firstError);
  }
  if((last.length < 2) || (last === "")){
    validForm = false;
    const lastError = document.createElement("p");
    lastError.classList.add("errorMessage");
    lastError.innerText = "Veillez entrer 2 caractères ou plus pour le champ du nom";
    formData[1].appendChild(lastError);
  }
  if(!email.match(validRegex)){
    validForm = false;
    const emailError = document.createElement("p");
    emailError.classList.add("errorMessage");
    emailError.innerText = "Veillez entrer une adresse email valide";
    formData[2].appendChild(emailError);
  }
  if(birthdate === ""){
    validForm = false;
    const birthdateError = document.createElement("p");
    birthdateError.classList.add("errorMessage");
    birthdateError.innerText = "Veillez entrer votre date de naissance";
    formData[3].appendChild(birthdateError);
  }
  if((typeof quantity !== "number") || (isNaN(quantity))){
    validForm = false;
    const quantityError = document.createElement("p");
    quantityError.classList.add("errorMessage");
    quantityError.innerText = "Veillez entrer un nombre";
    formData[4].appendChild(quantityError);
  }
  if((locationCheckbox === null)){
    validForm = false;
    const locationError = document.createElement("p");
    locationError.classList.add("errorMessage");
    locationError.innerText = "Vous devez choisir une option";
    formData[5].appendChild(locationError);
  }
  if(!conditionsGenerales.checked){
    validForm = false;
    const conditionsGeneralesError = document.createElement("p");
    conditionsGeneralesError.classList.add("errorMessage");
    conditionsGeneralesError.innerText = "Vous devez vérifier que vous acceptez les termes et conditions";
    formData[6].appendChild(conditionsGeneralesError);
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