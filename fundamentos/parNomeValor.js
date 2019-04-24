// par nome/valor
const saudacao = 'Opa'  // contexto léxico 1. q local fisico do código foi definido

function exec() {
    const saudacao = 'Falaaa'   // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valores
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito LEGAL!!!',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)