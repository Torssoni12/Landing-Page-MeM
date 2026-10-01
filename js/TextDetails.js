const elemento = document.getElementById("texto-transicao");
const textos = [
    { texto: "Frigorífico", fonte: "Montserrat", fontWeight: 600},
    { texto: "FRIGORÍFICO", fonte: "Bebas Neue", fontWeight: 600 },
    { texto: "Frigorífico", fonte: "Passero One",  fontWeight: 400 },
    { texto: "FRIGORÍFICO", fonte: "Stack Sans Headline", fontWeight: 600 }
];

let index = 0;

setInterval(() => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(0px)";

    setTimeout(() => {

        index = (index + 1) % textos.length;

        elemento.textContent = textos[index].texto;
        elemento.style.fontFamily = textos[index].fonte;
        elemento.style.fontWeight = textos[index].fontWeight;

        elemento.style.opacity = "1";
        elemento.style.transform = "translateY(0)";

    }, 100);

}, 750);