function Pessoa(nome) {     //no lugar do construtor, é usado o parametro (nome)
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
 const p2 = new Pessoa('João')
 p2.falar()
 console.log(typeof p2)