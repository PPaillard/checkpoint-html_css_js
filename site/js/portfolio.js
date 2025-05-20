// Clique pour changer l'image de l'avatar
const ChangeAvatarId = document.getElementById("img-avatar");

ChangeAvatarId.addEventListener ("click", ()=>{
    ChangeAvatarId.setAttribute("src", "image/avatar.svg")
}
)

const ChangeNameID = document.getElementById("firstname");
const ChangeNameButton = document.querySelector("#changerlenom")



ChangeNameButton.addEventListener("click", (ChangeName)=>{
    const ChangeNamePrompt = prompt("Quel nom souhaitez-vous mettre ?")
    ChangeNameID.textContent=ChangeNamePrompt;
    ChangeNameID.style.color = "white";
}
)

document.getElementById("changerlefond").addEventListener("click", (ChangeColor)=>{
    let color=prompt("Quelle couleur doit avoir votre fond ?");
    const pinkBgs= document.getElementsByClassName("pink-bg");
    for (const pinkBg of pinkBgs){
        pinkBg.style.backgroundColor = color;
    }
})

document.getElementById("changerlefondtxt").addEventListener("click", (ChangeColorText)=>{
    let color = prompt("Quel couleur souhaitez-vous pour le texte ?")
    const pinkTexts = document.getElementsByClassName("pink-text");
    for (const pinkText of pinkTexts){
        pinkText.style.color = color;
    }
})