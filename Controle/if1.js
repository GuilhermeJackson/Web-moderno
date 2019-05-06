function soNoticiaBoa(nota) {
    if(nota => 7) {
        console.log('Aprovado com ' + nota)
    }
}

soNoticiaBoa(8.1)
soNoticiaBoa(6.5)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)    //Devolvendo o valor true
    }
}
//se for verdadeiro entao é imprimido se for falso ai não é imprimido
seForVerdadeEuFalo()    //não foi imprimido
seForVerdadeEuFalo(null)    //não foi imprimido
seForVerdadeEuFalo(undefined)   //não foi imprimido
seForVerdadeEuFalo(NaN) //não foi imprimido
seForVerdadeEuFalo('')  //não foi imprimido
seForVerdadeEuFalo(0)   //não foi imprimido
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})