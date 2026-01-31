function tocarAudio(id){
    const sound = getSound(id);
    if(!sound) return;

    const audio = document.getElementById("trilhaPlayer");

    if(audio.src !== `../${sound.link}`){
        audio.src = `../${sound.link}`;
    }

    audio.currentTime = 0;
    audio.play();
}

function pararAudio(){
    const audio = document.getElementById("trilhaPlayer");
    audio.pause();
    audio.currentTime = 0;
}
