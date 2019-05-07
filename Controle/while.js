function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0   //opcao tem o valor zero

    while (opcao != -1) {   //enquanto opcao nao for -1 é para executar
        opcao = getInteiroAleatorioEntre(-1, 10)    //inicializa o random na variavel opcao entre min = -1 e max = 10
        console.log(`Opção escolhida ${opcao}.`)    //imprimir os valores de random
    }
    console.log('Até a próxima!')   // acaba o while e escreve o console.log