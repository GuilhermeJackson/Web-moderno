//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {  //funcao sem nome
    console.log(a + b)
}   

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel. Forma reduzida
const soma = (a, b) => { // => substitui a palavra function
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

//funcao de um unico parametro
const imprimir2 = a => console.log(a)
imprimir2('Soma a porra toda: ' + (7 + 1)) 