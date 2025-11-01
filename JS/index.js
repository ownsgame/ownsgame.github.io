const imgs = [
    "Sprites/IU/TelaInicial1.svg",
    "Sprites/IU/TelaInicial2.svg",
    "Sprites/IU/TelaInicial3.svg",
];

const ImagemTelaInicial = document.getElementById("inicial-imagem");
let index = 0;

setInterval(()=>{
    ImagemTelaInicial.src = imgs[index];
    index = (index + 1) % imgs.length;
}, 1200);