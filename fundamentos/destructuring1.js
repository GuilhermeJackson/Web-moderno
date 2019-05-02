// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa   // {} operador de desestruturação
console.log(nome, idade)

const { nome: n, idade: i } = pessoa    //em vez de ficar escrevendo nome é só escrever n
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) 

const {endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//destructuring: é uma forma de retirar alguma coisa dentro de uma estrutura 