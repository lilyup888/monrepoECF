const guest = document.querySelector(".guests-container");

const invited = document.querySelector(".invit");


guest.addEventListener("click", function () {
  guest.classList.toggle("guestOne");
});



invited.addEventListener("click", function () {
    invited.classList.toggle("invitOne");
  });

  const burger = document.querySelector("nav button span");
  const navMenu = document.querySelector(".mobileNav");

burger.addEventListener("click", function (){
  navMenu.classList.toggle("open");});