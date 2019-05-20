    //classe
class Pessoa {
    constructor(nome) { //construtor da class para iniciar as variaveis
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa(`João: ${5 + 2}`)
p1.falar()


    //funcao
const criarPessoa = nome => {       
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João2')
p2.falar()


// fazendo a mesma operação com class usando funçao
function PessoaFuncao(nome) {     //no lugar do construtor, é usado o parametro (nome)
    nome = nome

    this.falar = function() {
        console.log(`Seu nome é ${nome}`)
    }
}
 const p3 = new PessoaFuncao('João3: função no lugar de classe')
 p3.falar()
 console.log(typeof p3)