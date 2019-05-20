console.log(soma(3, 8)) //console pode ser chamado antes de declarar a function

//function declaration (tradicional)
//é carregado primeira as funcoes e depois a linha de código (pode dar um console na soma antes de declarar)
function soma(x, y) {
    return x+ y
}

//function expression (criar funcao anonima e atribuir funcao a uma variavel ou constante)
// pode usar const, var ou let
const sub = function (x, y) {
    return x - y
}
console.log(sub(5, 6))  //deve ser chamado apenas depois de declarar a function


//named function expression (usa os dois tipos de funcao)
//vantagem: em algum momento q estiver debugando o código, o nome dela aparece no stack
//pouco usada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(5, 5)) //deve ser chamado apenas depois de declarar a function