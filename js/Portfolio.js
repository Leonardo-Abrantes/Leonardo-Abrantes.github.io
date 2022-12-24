//Audio
function playAudio() {
    var AudioOn = document.getElementById("audioOn");
    var AudioOff = document.getElementById("audioOff");

    if (AudioOff.style.display == "block") {
        AudioOff.style.display = "none";
        AudioOn.style.display = "block";
        audio.play();
        timer=setTimeout(turnAudioOff,118000);
    } else {
        AudioOn.style.display = "none";
        AudioOff.style.display = "block";
        audio.pause();
        clearTimeout(timer);
    }
}
function turnAudioOff() {
    var AudioOn = document.getElementById("audioOn");
    var AudioOff = document.getElementById("audioOff");

    AudioOn.style.display = "none";
    AudioOff.style.display = "block";
}


//Sair do site
function exitModal(){
    $('#exitModal').modal('show');
    timerExit=setTimeout(exitSite,2500);
}    
function exitSite(){
    window.open("https://www.google.com","_self")
}
function cancelExit(){
    clearTimeout(timerExit);
}
  

//Validação do form de contacto ING
function ValidateEmail(inputEmail,inputMessage){
			
     var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
    if(inputEmail.value.match(mailformat) && inputMessage.value.length >=1 ){
        $('#ContactModal').modal('show');
    }else if(inputEmail.value.match(mailformat) && inputMessage.value.length<1 ) {
        alert("Please enter a valid message!");
        document.formContact.message.focus();
    }else{
        alert("Please enter a valid email address!");
        document.formContact.email.focus();
    }

}

//Validação do form de contacto PT
function ValidaEmail(inputEmail,inputMensagem){

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(inputEmail.value.match(mailformat) && inputMensagem.value.length >=1 ){
        $('#ContactoModal').modal('show');
    }else if(inputEmail.value.match(mailformat) && inputMensagem.value.length < 1) {
        alert("Por favor introduza uma mensagem !");
        document.formContactos.message.focus();
    }else{
        alert("Por favor introduza um email válido!");
        document.formContactos.email.focus();
    }
}

