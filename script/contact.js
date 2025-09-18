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

const formulaire = document.getElementById("form-1");
const Username = document.getElementById("username");
const Email = document.getElementById("email")
const Texearea = document.getElementById("textearea");

formulaire.addEventListener("submit", (e)=>{
    e.preventDefault();
    CheckInput();

   if(Validform()){
      SuccesAlert();
   }
})

function Validform () {
   const UsernameValue = Username.value.trim();
   const EmailValue = Email.value.trim();
   const TexteareaValue = Texearea.value.trim();

     return (
        UsernameValue !== "" &&
        EmailValue !== "" &&
        IsEmail(EmailValue) &&
        TexteareaValue !== ""
    );
}

function SuccesAlert () {
   swal.fire({
      icon :"success",
      title: "Merci",
      html: `Votre message a bien été envoyé`,
      timer: "3000",
   })
}


function CheckInput () {
   const UsernameValue = Username.value.trim();
   const EmailValue = Email.value.trim();
   const TexteareaValue = Texearea.value.trim();
   
   if(UsernameValue === ""){
      SetErrorFor(Username, "usernane can't be blank")
   }else{
     SetSuccessFor(Username)
   }
   if(EmailValue ===""){
      SetErrorFor(Email, "Email can't be blank");
   }else if(!IsEmail(EmailValue)){
       SetErrorFor(Email, "not a valid email")
   }else{
      SetSuccessFor(Email);
   }
   if(TexteareaValue=== ""){
      SetErrorFor(Texearea, "textarea can't be blank")
   }else{
      SetSuccessFor(Texearea);
   }
}

function SetErrorFor (input, message){
   const formcontrol = input.parentElement;
   const small = formcontrol.querySelector("small")
   formcontrol.className = "form-control error";
   small.innerText = message;
} 

function IsEmail (Email){
 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
}

function SetSuccessFor ( input){
    const formControl = input.parentElement;
    formControl.className= "form-control success"
}