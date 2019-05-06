const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {    //Math.floot = redonda o numero pra baixo e não retorna bool
        case 10:
        case 9:
            console.log('Quadro de honra.')
            break   //para não sair executando todos os case
        case 8: case 7: //os cases não pode ser numero quebrado como 1,5 só numeros inteiros
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3, 2, 1, 0:    //maneira simplificada
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
    console.log('Fim!!!')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)