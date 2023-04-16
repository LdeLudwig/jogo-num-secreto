const menorValor = 0;
const maiorValor = 1900;
const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto(){
    return parseInt(Math.random() * maiorValor + 1)
}
console.log('Número Secreto',numeroSecreto) 

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor;