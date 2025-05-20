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