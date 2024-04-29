function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = chute

    if (!chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Palavra errada</div>'
        return
    } else {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>A palavra secreta era ${numeroSecreto}</h3>
    `
    }
}

function chuteForInvalido(numero) {
    if(numero == numeroSecreto || numero == "Faz o L" || numero == "faz o L" || numero == "faz o l." || numero == "faz o l"){
        return true 
    } else {
        return false
    }
}
