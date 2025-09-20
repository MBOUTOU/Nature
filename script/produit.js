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
 
document.addEventListener("DOMContentLoaded", () =>{
  let PageUrl = window.location.href;

  if(PageUrl.includes("localhost")){
    PageUrl= "https://github.com/MBOUTOU/Nature/blob/master/pages/produit1.html";
  }

  const EncodeURl = encodeURIComponent(PageUrl)
  const MesaageProduit = document.getElementById("message-produit");
  const DataMessage = encodeURIComponent(MesaageProduit.dataset.message);
  
  function partagerSurFacebook(){
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${EncodeURl}`, '_blank', 'noopener,noreferrer');
  };

  function partagerSurWhatsApp(){
    window.open(`https://api.whatsapp.com/send?text=${DataMessage}%20${EncodeURl}`, '_blank', 'noopener,noreferrer');
  };

  function ouvrirInstagram(){
    window.open(`https://www.instagram.com/Clairwhy/?text=${EncodeURl}`, '_blank', 'noopener,noreferrer');
  };

  function ouvrirTikTok(){
    window.open(`https://www.tiktok.com/@ton_nom_d_utilisateur?text=${EncodeURl}`, '_blank');
  };

const BtnFacebook = document.querySelector(".bnt-Facebook");
const BtnWhatsApp = document.querySelector(".btn-Whatsapp");
const BtnTiktok = document.querySelector(".btn-tiktok");
const BtnInstagram = document.querySelector(".btn-instagram");

if(BtnFacebook){
  BtnFacebook.addEventListener('click',partagerSurFacebook)
}

if(BtnInstagram){
  BtnInstagram.addEventListener('click', ouvrirInstagram)
}

if(BtnWhatsApp){
  BtnWhatsApp.addEventListener('click', partagerSurWhatsApp)
}

if(BtnTiktok){
   BtnTiktok.addEventListener('click', ouvrirTikTok)
}

})

// -------------------------------------------------------

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  autoplay :{
    delay: 5000,
    pauseOnMouseEnter: true,
  },

  // If we need pagination
  pagination: {
    el:'.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
    }
  },

});





































