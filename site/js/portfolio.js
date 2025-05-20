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
    let bgsPink = document.getElementsByClassName("pink-bg");

    for (const bgPink of bgsPink) {
        bgPink.style.backgroundColor = couleur1;
    }

});
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

let btnBack = document.getElementById("btnBack");
let backList = document.getElementById("back-dev-tools");

btnBack.addEventListener("click", () => {
    let liContent = prompt("Ajouter un outil de développement Back:");
    let newLi = document.createElement("li");
    newLi.textContent = liContent;
    backList.appendChild(newLi);
});

let btnHide = document.getElementById("btnHide");

btnHide.addEventListener("click", () => {
    let buttons = document.querySelectorAll("div>button")
    for (const button of buttons) {
        button.remove();
    }
});