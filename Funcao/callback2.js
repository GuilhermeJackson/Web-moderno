const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


//Sel callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log('nota 1: ' + notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota) { //filter = funcao q filtra os elemento de um array em cima de um determinado criterio e vai ser uma funcao callback
    return nota < 7
})

console.log('nota 2: ' + notasBaixas2)


//O mais tora
const notasBaixas3 = notas.filter(nota => nota < 7) //(nota => nota < 7) = passando uma callback
//filter = vendo se em cada elemento a nota é menos q 7
console.log('nota 3: ' + notasBaixas3)


//O mais elegante
const notaMenorQue7 = nota => nota < 7
const notaBaixa4 = notas.filter(notaMenorQue7)

console.log('nota 4: ' + notaBaixa4)