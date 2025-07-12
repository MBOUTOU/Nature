const BtnCommander = document.querySelector(".btn2")

BtnCommander.addEventListener("click", () =>{
   const ProduitName = "Huile de Nila"
   const ImageURL = "https://localhost:5500//image/huile/produit-huile (2).jpeg";
   const Message = `Boujour Clairwhy je souhaite commander l'${ProduitName}. l'image ${ImageURL}`;
   const Lienwhatsapp =`https://wa.me/242068718977?text=${encodeURIComponent(Message)}`;
   window.open(Lienwhatsapp, '_blank');
})

// ----------------------------------------------
// la partie du button 

const IconeButton = document.querySelectorAll(".icone i")
  IconeButton.forEach((icone) =>{
    icone.addEventListener("click", ()=>{
      const box = icone.closest(".box-element");
      const Texteparagraphe = box.querySelector(".paragraphe");
      const Actionverifier = Texteparagraphe.classList.contains("active");
    
      document.querySelectorAll(".fa-arrow-down").forEach((i) =>{
           i.classList.remove("active");
      })

      document.querySelectorAll(".paragraphe").forEach((p) =>{
           p.classList.remove("active");
      })
     
      if(!Actionverifier){
        icone.classList.add("active");
        Texteparagraphe.classList.add("active");
      }
    })
  })


//--------------------------------------------

const ImagePricipales = document.querySelector(".imagePricipale");
const SecondImages = document.querySelectorAll(".letter-image");

  SecondImages.forEach((images) =>{
    images.addEventListener("click", ()=>{
          ImagePricipales.classList.remove("active");
             void ImagePricipales.offsetWidth;
             ImagePricipales.src = images.src;
             ImagePricipales.classList.add("active");
    });
  });



























