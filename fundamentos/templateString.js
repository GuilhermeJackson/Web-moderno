const nome = 'Rebeca'
const concatenacao = "Olá " + nome + "!"
const tamplate = `
Olá
${nome}! `

console.log(concatenacao, tamplate)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()     //Pode usar tamplateString em uma funcao também :)
console.log(`Ei... ${up(`cuidado`)}!`)