function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Palavra errada</div>'
        return
    }

    

    if (numero === numeroSecreto || numero === "Estrelinha" || numero === "estrelinha") {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>A palavra secreta era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    console.log(numeroSecreto)
    console.log(chute)
    return numeroSecreto != chute
}
