const fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)   // +1 é para começar do indice 1 e não do 0
}

//forEach = é uma funcao de fabricantes e fabricante é um array e dentro do array temos a funcao forEach
fabricante.forEach(imprimir)    //forEach vai rodar 'imprimir' em cada array
fabricante.forEach(function(a){
    console.log(a)  // a recebe cada um dos elementos do array
})
fabricante.forEach(b => console.log(b)) //arrow