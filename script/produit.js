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
  const URldelapage = encodeURIComponent(window.location.href);
  const MesaageProduit = document.getElementById("message-produit");
  const DataMessage = encodeURIComponent(MesaageProduit.dataset.message);
  
  
  function partagerSurFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${URldelapage }`, '_blank', 'noopener,noreferrer');
  };

  function partagerSurWhatsApp() {
    window.open(`https://api.whatsapp.com/send?text=${DataMessage}%20${URldelapage }`, '_blank', 'noopener,noreferrer');
  };

  function ouvrirInstagram() {
    window.open(`https://www.instagram.com/ton_nom_d_utilisateur/`, '_blank', 'noopener,noreferrer');
  };

//  function partagerParGmail() {
   
// }

  function ouvrirTikTok() {
    window.open(`https://www.tiktok.com/@ton_nom_d_utilisateur`, '_blank');
  }


const BtnFacebook = document.querySelector(".bnt-Facebook");
const BtnWhatsApp = document.querySelector(".btn-Whatsapp");
const BtnMail = document.querySelector(".btn-Mail");
const BtnTiktok = document.querySelector(".btn-tiktok");
const BtnInstagram = document.querySelector(".btn-instagram")

if(BtnFacebook){
  BtnFacebook.addEventListener('click',partagerSurFacebook())
}

if(BtnInstagram){
  BtnInstagram.addEventListener('click', ouvrirInstagram())
}

if(BtnWhatsApp){
  BtnWhatsApp.addEventListener('click', partagerSurWhatsApp() )
}

if(BtnTiktok){
   BtnTiktok.addEventListener('click', ouvrirTikTok())
}

// if(BtnMail){
//   BtnMail.addEventListener('click', partagerParGmail())
// }

})

























