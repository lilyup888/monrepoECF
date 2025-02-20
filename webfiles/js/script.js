const guest = document.querySelector(".guests-container");

const invited = document.querySelector(".invit");

guest.addEventListener("click", function () {
  guest.classList.toggle("guestOne");
});

invited.addEventListener("click", function () {
    invited.classList.toggle("invitOne");
  });


 document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("burger-icon");

  menuToggle.addEventListener("click", function() {
      this.classList.toggle("active"); 
      
  });
});
const boutton= document.getElementById("burger-icon");
const hiddenMenu= document.getElementById("#hidden");


boutton.addEventListener("click", function() {
    hidden.classList.toggle("hidden");
    
});

hiddenMenu.addEventListener("mouseleave", function () {
    hiddenMenu.classList.add("hidden");
});





const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]+$/;

const nameField = document.getElementById("lastname");
const fnameField = document.getElementById("firstname");
const mailField = document.getElementById("mail");
const objectField = document.getElementById("object");
const messField = document.getElementById("message");

function validateForm() {
  const name = nameField.value.trim();
  const fname = fnameField.value.trim();
  const email = mailField.value.trim();
  const object = objectField.value.trim();
  const message = messField.value.trim();
  
 

  
  const submitBtn = document.getElementById("submit-btn");
 

  if (name !== "" && fname !== "" && object !== "" && message !== "" && agreement.checked && name.length >= 2 && name.length <= 50 && message.length >= 3 && message.length <=250 && nameRegex.test(name) &&
  nameRegex.test(fname) ) {
    submitBtn.disabled = false; 
  } else {
    submitBtn.disabled = true; 
  }
}







nameField.addEventListener("input", validateForm);
fnameField.addEventListener("input", validateForm);
mailField.addEventListener("input", validateForm);
objectField.addEventListener("input", validateForm);
messField.addEventListener("input", validateForm);

