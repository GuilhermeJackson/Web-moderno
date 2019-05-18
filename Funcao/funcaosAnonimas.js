const soma = function (x, y) {  //funcao anonima
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {    //outra funcao anonima
    console.log(operacao(a, b)) //operacao vai operar os parametros a, b
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {   //passou uma funcao anonima diretamente
    return x - y
})
imprimirResultado(3, 4, (x, y) => x* y)

const pessoa = {    //funcao anonima dentro de um objeto
    falar: function (){  //falar recebe uma funcao anonima
    console.log('OPA')
    }
}

pessoa.falar()

//Só funcao anonima aqui nesse código