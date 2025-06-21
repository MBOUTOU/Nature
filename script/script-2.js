const buttons =  document.querySelectorAll(".cat-texte");
const catImage = document.querySelectorAll(".groy-categorie")

const filterCat = (e)=> {
    document.querySelector(".active").classList.remove('active');
    e.target.classList.add("active")

    catImage.forEach((groyCategorie) => {
        groyCategorie.classList.add("filtreure");

        if(groyCategorie.dataset.name=== e.target.dataset.name
            || e.target.dataset.name === "Tous"){
                 groyCategorie.classList.remove("filtreure");
            }
    })  
}

buttons.forEach(catTexte => catTexte.addEventListener("click", filterCat));
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







