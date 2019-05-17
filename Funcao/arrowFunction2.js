function Pessoa() {
    this.idade = 0

/*setInterval (function() {   //setInterval() = dispara outra funcao apartir de um intervalo que foi passado
    this.idade++
    console.log(this.idade)
        }.bind(this), 1000)     //.bind(this) = amarra/aponta para pessoa
} 

new Pessoa */
setInterval(() => {
    this.idade++
    console.log(this.idade)
    }, 1000)
}

new Pessoa