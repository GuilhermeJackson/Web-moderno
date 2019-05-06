const imprimirResultado = function(nota) {
    if(nota >= 7) { //pode ser tirado o escopo do if e else '{}' mas por padrao é bom deixar o escopo
            console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Epa!')   //Cuidado! ao comparar nota => 7 com uma string, é retornado false imprimindo na tela o 'Repravado'
