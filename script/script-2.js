//---------------------------------------------------------

const Menuhumberger = document.querySelector(".menu-navigation");
const menu = document.querySelector(".nav-links");
const bodyStyle = document.querySelector("body");
const parentLinks = document.querySelector(".nav-link-contanaire")


Menuhumberger.addEventListener("click", () =>{
    Menuhumberger.classList.toggle("active");
    menu.classList.toggle("active");
    bodyStyle.classList.toggle("active");
    parentLinks.classList.toggle("active")

})







