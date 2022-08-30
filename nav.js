const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.getElementsByClassName("nav-links__container-a");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


for(let i = 0; i < 4; i++){
  links[i].addEventListener("click", () =>{
    navLinks.classList.remove("open")
  });
}


function CloseNav() {
  navLinks.classList.remove("open")
}





