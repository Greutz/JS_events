// Fonctionnalité 1 :
let footer = document.querySelector("footer")
let clickCounter = 0
footer.addEventListener("click", event => {
  clickCounter += 1
  console.log(`clic numéro ${clickCounter}`)   
});

// Fonctionnalité 2 :
let header = document.getElementsByClassName("navbar-toggler");
let navBar = document.getElementById("navbarHeader")
function toggleMenu(evt) {
  navBar.classList.toggle("collapse");
}
header[0].onclick = toggleMenu;

/* Fonctionnalité 3 :
 On défini et active une variable editButton sélectionnant par nom de classe les boutons outline de la page
 et une variable cardText sélectionnant le texte du corps des cartes */
let editButton = document.getElementsByClassName("btn-outline-secondary")
let cardText = document.getElementsByClassName("card-text")
// On applique un event listener sur le bouton edit de la 1ere carte, sur l'action "click" 
editButton[0].addEventListener("click", event => {
    cardText[0].style.color = "red";
});

/* Fonctionnalité 4 :
 On récupère le code couleur du texte de la carte */
console.log(window.getComputedStyle(cardText[1] ,null).getPropertyValue('color'));

// On reprend nos variables editButton et cardText, et on applique un event listener à l'index 1, sur l'action "click"
editButton[1].addEventListener("click", event => {
  if (cardText[1].style.color === "rgb(33, 37, 41)"){
  cardText[1].style.color = "green";
}else {
  cardText[1].style.color = "rgb(33, 37, 41)"
}
});

// Fonctionnalité 5 :
lnk = document.getElementsByTagName("link")
initialNavBar = document.getElementsByClassName("navbar")
initialNavBar[0].addEventListener("dblclick", disableLink => {
    if(document.getElementsByTagName("link")[0].disabled == false){
      document.getElementsByTagName("link")[0].disabled = true
    }else {
      document.getElementsByTagName("link")[0].disabled = false
    }
});

// Fonctionnalité 6 : 
let view = document.getElementsByClassName("btn-success");
let img = document.getElementsByClassName("card-img-top");
  for(i = 0; i < view.length; i++) {
    view[i].addEventListener("mouseover", minimize => {
      console.log(`${i}`);
      cardText[0].classList.toggle("collapse");
      img[0].setAttribute('style', 'width: 100%')
      if(img[0].getAttribute('style') == 'width: 100%'){
        img[0].setAttribute('style', 'width: 20%')
      }
      if(img[0].getAttribute('style') == 'width: 20%'){
        img[0].setAttribute('style', 'width: 100%')
      }
  })
};
/*  action hover sur le bouton view d'une carte :
    le texte disparaît
    l'image se réduit de 80%
    les boutons edit / view ne changent pas
    un nouveau hover inverse l'état */