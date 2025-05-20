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
const pink = 

changeColor.addEventListener('click', () => {
    document.getElementsByClassName("description pink-bg").classList.add("changeColors")
    //pink.style.backgroundColor = "#750ff7"
  }
)
//????????????

// Exo 4 
const allPink = document.querySelector('allPink')