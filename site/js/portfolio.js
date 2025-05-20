function changeName() {
  let person = prompt("Merci d'entrer votre nom");
  if (person != null) {
    document.getElementById("firstname").textContent = person ;
    document.getElementById("firstname").classList.add("white-text") ;
  }
}

    const avatar = document.getElementById("avatar");

    avatar.addEventListener("click", () => {
        if (avatar.src.endsWith("avatar.svg")) {
            avatar.src = "./image/avatar-bis.png";
        } else {
            avatar.src = "./image/avatar.svg";
        }
    });

    // const bgColor = document.querySelector(".description");
    // const changeBg = document.getElementById("changeBg");

    // changeBg.addEventListener("click", () => {
    //     bgColor.style.backgroundColor = "#750ff7";

    // });
    function changeBg() {
        let value = document.getElementById("changeBg").value;
        const bgColor = document.querySelector(".description");
        bgColor.style.backgroundColor = value;
    }

    const textPink = document.getElementsByClassName("pink-text");
    const changeColor = document.getElementById("changeColor");

    changeColor.addEventListener("click", ()=>{
        
        for(let i = 0; i < textPink.length; i++){
            textPink[i].style.color = "#750ff7";
        }
    });
const a = document.querySelectorAll("a");
const changeLinkColor = document.getElementById("changeLinkColor");

changeLinkColor.addEventListener("click", () => {
    for(let i = 0; i < a.length; i++){
        a[i].style.color = "#750ff7";
    }
})

const changeLi = document.getElementById("changeLi");
const list = document.querySelector("#front-dev-tools");
const listLi = list.querySelectorAll("li");
const newList = ["VScode", "Photoshop", "Laravel", "MacOS"];

changeLi.addEventListener("click", () => {
    for(let j = 0; j < newList.length; j++){
        for(let i = 0; i < listLi.length; i++){
            
            listLi[i].textContent = newList[j++]
        }
    }
})

const listBack = document.getElementById("backendList");
const addItemBack = document.getElementById("addItemBack");

addItemBack.addEventListener("click", () => {
    let li = document.createElement("li");
    let text = prompt("Merci d'entrer la valeur de la liste");
    const textnode = document.createTextNode(text);

    li.appendChild(textnode);
    listBack.appendChild(li);
});
