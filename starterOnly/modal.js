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
const modalBody = document.querySelector(".modal-body");
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
  // reset des champs
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

    if(validForm){
      console.log("ce formulaire est valid");
      // display none sur le formulaire + ajout texte
      modalBody.innerHTML = '<p class="validMessage" id="closeValid"> Merci pour votre inscription </p> <button class="btn-submit" onclick="closeModal()">Fermer</button>';
    }

    return validForm;
  }