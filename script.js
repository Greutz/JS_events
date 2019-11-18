// Fonctionnalité 1 :
var footer = document.querySelector("footer")
var clickCounter = 0
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

// Fonctionnalité 3 :
let editButton = document.getElementsByClassName("btn-outline-secondary")
var cardText = document.getElementsByClassName("card-text")
editButton[0].addEventListener("click", event => {
    cardText[0].style.color = "red";
});

// FOnctionnalité 4 :
console.log(window.getComputedStyle(cardText[1] ,null).getPropertyValue('color'));
editButton[1].addEventListener("click", event => {
  if (cardText[1].style.color === "rgb(33, 37, 41)"){
  cardText[1].style.color = "green";
}else {
  cardText[1].style.color = "rgb(33, 37, 41)"
}
});