function verificaChute(chute){
    const numero = +chute
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    } if(numeroForaDoIntervalo(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido. O número precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    } if(numero === numeroSecreto){
        document.body.innerHTML = ` 
        <h2>Você Acertou!!</h2>
        <h3>O número Secreto era ${numeroSecreto}</h3>
        <button id="jogarNovamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down">`
    } else{
        elementoChute.innerHTML+= `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up">`
    }
}


function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoIntervalo(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", (e)=>{
    if(e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
})
