const guest = document.querySelector(".guests-container");

const invited = document.querySelector(".invit");


guest.addEventListener("click", function () {
  guest.classList.toggle("guestOne");
});



invited.addEventListener("click", function () {
    invited.classList.toggle("invitOne");
  });

  const burger = document.querySelector("#burger-icon");
  const navMenu = document.querySelector(".mobilenav");

burger.addEventListener("click", function (){
  navMenu.classList.toggle("open");});