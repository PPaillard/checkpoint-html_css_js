let avatar = document.getElementById("avatar");

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar-bis.png"
})

let firstname = document.getElementById("firstname");

firstname.addEventListener("click", () => {
    firstname.textContent = "Zaher";
    firstname.style.color = "white";
})