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
    if(numero == numeroSecreto || numero == "Papito" || numero == "papito" || numero == "papito."){
        return true 
    } else {
        return false
    }
}
