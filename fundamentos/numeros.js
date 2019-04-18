const peso1 = 1.0
const peso2 = Number('2.0')     //Number alterar de string para numero

console.log(peso1, peso2)
console.log(Number.isInteger (peso1))   //retorna sé a variavel é número inteiro com true o false
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871    
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2   
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))       //toFixed(2) = retorna apenas duas casas deciamis
console.log(media.toString())       //toString = converte número em string
console.log(media.toString(2))      //toString(2) = converte em binario (binario é number)
console.log(typeof media)           //number é o tipo do dado
console.log(typeof Number)      //Number é uma função
