function changeName() {
  let person = prompt("Merci d'entrer votre nom");
  if (person != null) {
    document.getElementById("firstname").textContent = person ;
  }
}
