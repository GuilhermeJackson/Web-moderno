function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.dec) * (1 + imposto)}`    //this.preco e desc é global e o produto nao da valor no contexto global
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco    //esse atributo é associado a function lá em cima por ter o mesmo nome
}

global.preco = 20   //tornando global para retornar o resultado
global.desc = 0.1   //tornando global para retornar o resultado
console.log(produto.getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, dec: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))    //parametro do call é passado os parametros do getPreco (primeiro o contexto de os paramentros)
console.log(getPreco.apply(carro, [0.18, '$'])) //os paramentros dentro de um apply deve ser passado dentro de um array
