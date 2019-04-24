const funcs = []    //criando array

for ( let i = 0; i < 10; i++) {
    funcs.push(function(){  //push cria um arrau novo e function() cria uma funcao nao definida que imprimi o i
        console.log(i)  //imprimir cada array
    })
}

funcs [2]() //com a variavel let fica com a memoria do que foi o i dentro da funcao (Por causa do bloco do let)
funcs [8]()
funcs [0]()