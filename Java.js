const miel = document.getElementById("miel");
const bouton = document.getElementById("bouton");

bouton.addEventListener("click", function(){
  miel.classList.add("miel-animation");
});

miel.addEventListener("animationend", function(){
    document.location = "connexionEmail.html" ;
})
