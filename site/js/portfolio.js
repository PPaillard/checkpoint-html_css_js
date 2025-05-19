let avatar = document.getElementById("avatar");

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar-bis.png"
})

let firstname = document.getElementById("firstname");

firstname.addEventListener("click", () => {
    firstname.textContent = "Zaher";
    firstname.style.color = "white";
})

let btnFond = document.getElementById("btnFond");

btnFond.addEventListener("click", () => {
    let couleur1 = prompt("Veuillez selectionner une couleur de fond:");
    document.body.style.backgroundColor = couleur1;
})

let btnLiens = document.getElementById("btnLiens");

btnLiens.addEventListener("click", () => {
    let couleur2 = prompt("Veuillez selectionner une couleur pour les liens HTML:");
    let liens = document.getElementsByTagName("a");
    for (const lien of liens) {
        lien.style.color = couleur2;
    }
})

let btnFront = document.getElementById("btnFront");
let frontLis = document.querySelectorAll("#front-dev-tools>li");

btnFront.addEventListener("click", () => {
    for (let index = 0; index < 4; index++) {
        let choix = prompt("Entrez le nom de l'outil de développement numero " + (index + 1));
        frontLis[index].textContent = choix;

    }
}
);