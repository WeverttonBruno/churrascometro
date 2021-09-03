let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;

    let qdtTotalCarne = 400 * adultos + (400 / 2 * criancas);
    console.log(qdtTotalCarne);

}