// coleção dinânica de pares cheve/valo
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'    //apenas para fugir da concatenação
produto.preco = 220

console.log(produto['marca do produto'])
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {     //criando objeto
    modelo: 'A4',
    cor: 'Rosa',
    proprietario:{      //objeto dentro de um objeto
        nome: 'Raul',
        idade: 56,
        endereco: {     //outro objeto dentro de um objeto
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{      //passando atributos de um objeto pelo array
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function() {
        // ....
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Bairro 7'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)