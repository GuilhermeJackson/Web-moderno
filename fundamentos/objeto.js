const prod1 = {}    //Criado um objeto literal e vazio depois atribuiu valores de forma dinamica
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 455.987
prod1['Desconto Legal'] = 0.40  //evitar atributos com espaço

console.log(prod1)

const prod2 = {     //Cria o produto e abre o escopo para atribuir os identificadores e seus valores 
nome: 'Camisa Polo',
preco: 79.90,
['Marca de camisa']: 123,
obj: {
    blabla: 1,
    obj:{
        blabla: 2
    }
}
}

console.log(prod2)

//Objeto é uma coleção de chave e valor 