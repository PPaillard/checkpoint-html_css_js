// Je réupère l'avatar
const avatar = document.getElementById("avatar");
// j'écoute le click
avatar.addEventListener("click", () => {
  // je change la source de l'image
  avatar.src = "./image/avatar.svg";
});
