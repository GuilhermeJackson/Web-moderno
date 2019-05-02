function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min //Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.
    return Math.floor(valor)
}

//console.log(rand ({max: 50, min: 40}))    //Sem usar object pra dar o valor
const obj = {max: 100, min:50 }
console.log(rand(obj))
console.log(rand({min: 30})) //outra possibilidade, passando o min já que o max é por padrao 1000
console.log(rand({}))  //precisa do {} pq o rand precisa desestruturar alguma ESTRUTURA. Usa valor padrao da function

const obj2 = {max: 30, min:1}   //segundo rand 
console.log(rand(obj2))