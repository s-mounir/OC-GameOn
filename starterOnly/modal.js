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
const modalContent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

  if(window.innerWidth <= 768){
    modalContent.style.marginTop = "100px";
    modalContent.style.marginBottom = "0px";
    modalbg.style.backgroundColor = "rgba(26, 39, 156, 0)";

    var x = document.getElementById("myTopnav");
    x.style.position = "fixed";
    x.style.zIndex = 5;
    x.style.backgroundColor = "white";
    x.style.height= "100px";
    x.style.width= "100%";
    x.style.margin= "0";
    x.style.padding = "20px";
  }
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  form.reset();
}

//check if value is correct, if not add error message
let validForm = true;

function isCorrect(condition,num,errorMessage){
  if(condition){
    validForm = false;
    const firstError = document.createElement("p");
    firstError.classList.add("errorMessage");
    firstError.innerText = errorMessage;
    formData[num].appendChild(firstError);
    formData[num].querySelector("input").style.borderColor= "red";
  }
}

  // validate form
  function validate(e){
  
    e.preventDefault();

    const validRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const quantity = document.getElementById("quantity").valueAsNumber;
    const locationCheckbox = document.querySelector('input[name="location"]:checked');
    const conditionsGenerales = document.getElementById("checkbox1");
    const formData = document.getElementsByClassName("formData");
    const errorMessage = document.querySelectorAll(".errorMessage");
  
    if(errorMessage.length > 0){
      for(let error of errorMessage){
        error.remove();
      }
    }

    isCorrect((first.length < 2) || (first === ""),0,"Veillez entrer 2 caractères ou plus pour le champ du prénom");
    isCorrect((last.length < 2) || (last === ""),1,"Veillez entrer 2 caractères ou plus pour le champ du nom");
    isCorrect(!email.match(validRegex),2,"Veillez entrer une adresse email valide");
    isCorrect(birthdate === "",3,"Veillez entrer votre date de naissance");
    isCorrect((typeof quantity !== "number") || (isNaN(quantity)),4,"Veillez entrer un nombre");
    isCorrect((locationCheckbox === null),5,"Vous devez choisir une option");
    isCorrect(!conditionsGenerales.checked,5,"Vous devez vérifier que vous acceptez les termes et conditions");

    console.log(validForm);

    if(validForm){
      console.log("ce formulaire est valid");
      modalBody.innerHTML = '<p class="validMessage" id="closeValid"> Merci pour votre inscription </p> <button class="btn-submit" id="closeBtn">Fermer</button>';

      // Submit form event
      const closeBtnModal = document.getElementById("closeBtn");
      closeBtnModal.addEventListener("click", closeModal);
    }

    return validForm;
  }

// Submit form event
submitBtn.addEventListener("click", validate);
