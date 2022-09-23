'use strict'
const readMore = document.getElementById("read-more");
var hideContent = document.querySelector(".about-content__hide");


readMore.addEventListener("click", () => {
    hideContent.classList.toggle("about-content__open");
    console.log("Se activo el read more");
})