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
