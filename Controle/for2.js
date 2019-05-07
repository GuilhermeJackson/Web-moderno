const notas = [6.5, 7.6, 8.4, 10]
    for(let i in notas) {
        console.log(i,' = ', notas[i])
    }

const pessoa = {
    nome: 'Ana',
    sobrenome:'Pereira',
    idade: 10,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}