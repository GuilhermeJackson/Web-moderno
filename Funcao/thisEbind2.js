function pessoa() {
    this.idade = 0

/*setInterval (function() {   //setInterval() = dispara outra funcao apartir de um intervalo que foi passado
    this.idade++
    console.log(this.idade)
        }.bind(this), 1000)     //.bind(this) = amarra/aponta para pessoa
} 

new pessoa */

//Outra maneira
const self = this   //self recebe a referencia de this
setInterval (function() {   //setInterval() = dispara outra funcao apartir de um intervalo que foi passado
    self.idade++
    console.log(self.idade)
        }, 1000)     //.bind(this) = amarra/aponta para pessoa
    }

new pessoa