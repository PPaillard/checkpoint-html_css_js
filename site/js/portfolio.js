// Exo 1

const userIcon = document.querySelector("#userIcon")
userIcon.addEventListener('click', () => {
    userIcon.src = "image/avatar-bis.png"
})

// Exo 2
const nom = document.querySelector("#firstname");
const btn = document.querySelector("#change")

btn.addEventListener('click', () => {
    let name = prompt("Please enter your name:")
     if (name === null) {
    log.innerText = "OK, maybe next time.";
  } else {
    nom.style.color = 'white'
    nom.innerHTML = `${name}`;
  }
  }
)

// Exo 3
const changeColor = document.querySelector('#changeColor')
const pink = document.getElementsByClassName("pink-bg")
changeColor.addEventListener('click', () => {
    for(const color of pink){
        color.classList.add("changeColors")
    }
    //pink. = "#750ff7"
}
)

// Exo 4 
const myColor = document.querySelector('#myColor')

myColor.addEventListener('click', () => {
    let mycolor = prompt("Please enter your une couleur:")
     if (mycolor === null) {
    log.innerText = "OK, maybe next time.";
  } else {
    for(const color of pink){
    color.style.backgroundColor= `${mycolor}`
    }
} }
)
/*
myColor.addEventListener("change", () => {
        for(const color of pink){
         color.style.backgroundColor("myColor.value")
    }
  }
  
)*/

// Exo 5 

const link = document.querySelectorAll('a')
const colorLink = document.querySelector('#colorLink')

colorLink.addEventListener('click', () => {
    for(const color of link){
        color.style.color= "red"
    }
}
)

// Exo 6


const btnFront = document.querySelectorAll("changeFront")
let frontList = [];
i = 0
j = 0

btnFront.addEventListener('click', changeList)

function changeList() {
const front = document.querySelectorAll("front-dev-tools")    
    for(const li of front){
    }
} 
