// Je réupère l'avatar
const avatar = document.getElementById("avatar");
// j'écoute le click
avatar.addEventListener("click", () => {
  // je change la source de l'image
  avatar.src = "./image/avatar.svg";
});

// Etape 2 JS
const firstname = document.getElementById("firstname");
firstname.addEventListener("click", () => {
  firstname.textContent = "Pierre";
  firstname.classList.add("w-text");
});

// Etape 3
// Je vais chercher le bouton qui demande à changer la couleur
// sur le click ->
document.getElementById("changeColor").addEventListener("click", () => {
  // Je prends le couleur que me donne l'utilisateur
  let color = prompt("Quelle couleur doit avoir votre fond?");
  // Pour chaque élement possedant la classe pink-bg
  const pinkBgs = document.getElementsByClassName("pink-bg");
  for (const pinkBg of pinkBgs) {
    // Je change la couleur de fond pour lui donner la couleur de fond de l'utilisateur
    pinkBg.style.backgroundColor = color;
  }
});
