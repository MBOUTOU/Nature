// la partie des annimations au scroll 
window.sr = ScrollReveal({
      duration: 1500,
});

sr.reveal(".title-header", {
   distance: "50px",
   origin: "bottom",
})

sr.reveal(".sous-prince p", {
   distance: "50px", 
   origin: "bottom",
   delay: 200,
})

sr.reveal(".partienewslater", {
   distance: "50px", 
   origin: "bottom",
})

sr.reveal(".partieformulaire", {
   distance: "50px", 
   origin: "bottom",
})

sr.reveal(".partienewslater h2", {
   distance: "50px", 
   origin: "bottom",
})

sr.reveal(".partienewslater p", {
   distance: "50px", 
   origin: "bottom",
   delay: 200,
})

sr.reveal(".new", {
   distance: "50px", 
   origin: "bottom",
})


sr.reveal(".box-infor", {
   distance: "50px", 
   origin: "bottom",
})


sr.reveal(".contenaire-ifraiem", {
   distance: "50px", 
   origin: "bottom",
})

// la partie des elements de mon bouton 

const Menuhumberger = document.querySelector(".menu-navigation");
const menu = document.querySelector(".nav-links ")
const bodyStyle =document.querySelector("body")
const parentLinks =document.querySelector(".nav-link-contanaire")

   Menuhumberger.addEventListener("click", () =>{
      Menuhumberger.classList.toggle("active");
      menu.classList.toggle("active")
      bodyStyle.classList.toggle("active")
      parentLinks.classList.toggle("active")
   })
  
// la partie de mon formulaire de contact et abonnement 

