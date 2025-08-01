//----------------------------------------------
gsap.to(".nav-logo", {
    x: 10,
    duration: 2,
    opacity: 1,
})

gsap.to(".img-rotation", {
    duration: 4,
    repeat: -1,
    delay: 4,
    ease: "bounce",
    rotation: 360,
})

//------------------------------------------------------
// animation avec scrollreveal 
window.sr = ScrollReveal({
    duration: 1000,
    distance: "65px",
});

sr.reveal(".titre-1, .title-galerie", {
    origin: "bottom",
    distance: "50px",
})

sr.reveal(".title-collect", {
    distance:"65px",
    duration: 1300,
})

sr.reveal(".cat-produit", {
    distance: "60px",
})

sr.reveal(".boite",{
    distance:"65px",
    interval: 150,
})

// le reveal des conseils
sr.reveal(".title-contact",{
    distance:"65px",
})

sr.reveal(".title-paragraphe",{
    distance:"65px",
    delay: 220,
})

sr.reveal(".title-lien-contact",{
    distance:"65px",
    delay: 230,
})

// le card des commentaire 
sr.reveal(".title-commentaire",{
    distance:"50px",
})

sr.reveal(".card-commentaire",{
    distance:"50px",
    delay: 200,
})

