let dobro = function (a) {  //let pra poder ficar sobrescrevendo o 'dobro'
    return 2 * a
}

dobro = (a) => {    //sobrescrevendo function com a funcao arrow
    return 2 * a
}

dobro = a => 2 * a  //tira o escopo quando a function faz uma unica funcao
console.log(dobro(Math.PI)) // o dobro do PI

let ola = function () {
    return 'Olá function normal.'
}
console.log(ola())

ola = () => 'Olá, função sem parametros'
console.log(ola())

ola = _ => 'Olá, função possui apenas 1 parametro.'
console.log(ola())