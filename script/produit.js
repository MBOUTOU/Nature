const boutons = document.querySelectorAll('.Donne');
const cartes = document.querySelectorAll('.card');

boutons.forEach((button) =>{
   button.addEventListener("click", () =>{
      const Name = button.getAttribute("data-name");

    //   les element actives
      boutons.forEach((b) =>{b.classList.remove("active");})
      button.classList.add("active");

      cartes.forEach((carte) =>{
        if(carte.getAttribute("data-name") === Name){
            carte.classList.add("active");
        }else{
            carte.classList.remove("active")
        }
      })
   })
})

// ---------------------------------------------------------
 
document.addEventListener("DOMContentLoaded", (){
  const PageUrl = window.location.href;

    // if(PageUrl.includes("localhost")){
    //   PageUrl = "";
    // }
})

























