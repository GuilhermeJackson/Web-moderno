const funcs = []    //criando um array

for (var i = 0; i < 10; i++) {
    funcs.push(function(){  //push cria um arrau novo e function() cria uma funcao nao definida que imprimi o i
        console.log(i)
    })
}

funcs [2]() //Era pra retonar 2 mas o i não é respeitado e retorna onde o loop para
funcs [8]() //Era pra retonar 8 mas o i não é respeitado e retorna onde o loop para