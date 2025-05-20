const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
  avatar.src = "image/avatar-bis.png";
});

const firstName = document.getElementById("firstname");
firstName.addEventListener("click", () => {
  firstName.style.color = "white";
});

const changeName = document.getElementById("changeName");
changeName.addEventListener("click", () => {
  const betterName = prompt("Votre nom ?");
  firstName.textContent = `${betterName}`;
});

// je selectionne les elems rose
const bgColors = document.querySelectorAll(".pink-bg");
// je selectionne mon bouton pour changer la couleur
const changeColor = document.getElementById("changeColor");
//

changeColor.addEventListener("click", () => {
  for (const bgColor of bgColors) {
    bgColor.style.backgroundColor = "#750ff7";
  }
});

// Je dois selectionner un element
// je dois selectionner les elements ayant une couleur de fond rose
// qund je click sur cet element
// Pour chaque element qui a une couleur de fond rose dans ma liste d'elements ayant une couleur de fond rose.
// je change sa couleur de fond.

const changeColorElements = document.getElementById("changeColorElements"); //button
const pinkElements = document.querySelectorAll(".pink-text"); // Elements rose ?

changeColorElements.addEventListener("click", () => {
  for (const pinkElement of pinkElements) {
    const yourColor = prompt("Votre couleur change");
    pinkElement.style.color = `${yourColor}`;
  }
});

const colorLinks = document.querySelectorAll("a");
for (const colorLink of colorLinks) {
  colorLink.style.color = "#750ff7";
}

