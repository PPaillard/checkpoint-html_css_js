/* Changement de l'image de la bannière lors d'un clique */
let bannerAvatar = document.getElementById("changeBannerAvatar");
bannerAvatar.addEventListener("click", function(e){
    
    let first_src   = "image/avatar.svg",
        second_src  = "image/avatar-bis.png";

    if( this.attributes[0].value == first_src ){
        this.src = second_src;
    }else{
        this.src = first_src;
    }
    
});

/* Changement du nom "Matt" par celui de l'utilisateur */
let bannerName = document.getElementById("firstname");
bannerName.addEventListener("click", function(e){
    let saveName = this.innerText;
    this.innerHTML = `<input type='text' placeholder='${saveName}' id='inputChangeFirstname' oninput="this.size = this.value.length + 1" autocomplete="off" />`;
    document.getElementById("inputChangeFirstname").focus();
});

bannerName.addEventListener("focusout", function(e){
    let newFirstname = document.getElementById("inputChangeFirstname").value,
        defaultFirstname = document.getElementById("inputChangeFirstname").placeholder;

    if( newFirstname == "" ){
        bannerName.innerText = defaultFirstname;
    }else{
        bannerName.innerText = newFirstname;
    }

    bannerName.style.color = "#FFFFFF";
    
}); 

/* Changement de la couleurs de fond */
let buttonChangeColor = document.getElementById("btnChangeColor");
buttonChangeColor.addEventListener("click", function(e){
    let newColor = prompt("Quelle couleur souhaitez-vous ?");
    
    for( const elmt of document.querySelectorAll(".pink-bg") ){
        elmt.style.background = newColor;
    }
});

/* Changement de toutes les élements de couleurs bleu */
let btnChangeColorBlueElements = document.getElementById("btnChangeColorBlueElements");
btnChangeColorBlueElements.addEventListener("click", function(e){
    let newColor = prompt("Quelle couleur souhaitez-vous ?");
    
    for( const elmt of document.querySelectorAll("[class*='pink-']") ){
        if( elmt.classList.contains("pink-text") ){
            elmt.style.color = newColor;
        }

        if( elmt.classList.contains("pink-bg") ){
            elmt.style.backgroundColor = newColor;
        }
    }
});