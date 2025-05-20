const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
  avatar.src = "image/avatar-bis.png";
});

const firstName = document.getElementById("firstname");
firstName.addEventListener("click",()=> {
    firstName.style.color = "white"
    
})

const changeName = document.getElementById("changeName")
changeName.addEventListener("click",()=> {
  const betterName = prompt("Votre nom ?")
  firstName.textContent = (`${betterName}`)
})

