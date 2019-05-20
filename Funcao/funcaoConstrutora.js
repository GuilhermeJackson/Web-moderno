function Carro(velocidadeMaxima = 200, delta = 5) { //funcao construtora Carro
    //atributo privado
    let velocidadeAtual = 0

    //atributo publico
    this.acelerar = function () {   //atributo this. é global
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //meotodo publico
    this.getVelocidadeAtual = function () {  //get para pegar a velocidade
        return velocidadeAtual  //function para ter acesso e tornar visivel ao atributo privado
    }
}

const uno = new Carro   //cria um object com os atributos da function Carro
uno.acelerar()  //object uno usa a function acelerar
console.log(uno.getVelocidadeAtual())   //imprimi na tela depois de usar a function acelerar

const ferrari = new Carro (350, 20) //fala q object ferrari tem como function Carro e q velocidade maxima foi alterada de 200 para 350 edelta de 5 para 20
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)