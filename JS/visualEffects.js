function picarRed(){
    const camada = document.getElementById("camada-de-efeito");
    camada.style.backgroundColor = "rgba(255, 0, 0, 0.589)";
    camada.style.display = "block";
    

    setTimeout(()=>{
        fecharTela("camada-de-efeito")
    }, 700);
}