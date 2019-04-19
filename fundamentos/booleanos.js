let isAtivo = false     //let = retorna false literal
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1     // 0 false e 1 retorna verdadeiro
console.log(!isAtivo)   // ! faz a negação

console.log('os verdadeiros...')
console.log(!!3) //foraçando uma conversao para verdadeiro ou falço
console.log(!!-1)   // da verdadeiro
console.log(!!' ')  //esparço é veradeiro
console.log(!!'texto')  //texto é verdadeiro
console.log(!! [])  //array é verdadeiro
console.log(!!{})   //objeto literal é verdadeiro
console.log(!!Infinity)     //ifinito é verdadeiro
console.log(!!(isAtivo = true))     //verifica o true e retorna true, e nao se a operação deu certo

console.log('os falsos...')
console.log(!!0)
console.log(!!'')   //string vazia (sem espaço) é falso
console.log(!!null)     //null é falso
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))    //verifica o falso e retorna o falso, e nao se a operação deu certo

console.log('Para finalizar.......')
console.log(!!('' || null || 0 || ' '))     // !! = faz retornar um bool. || = '' é verdadeiro ou null é verdadeiro ou ' ' é verdadeiro. Se alguem for verdadeiro entao retorna verdadeiro
console.log(('' || null || 0 || ' GUI ' || ' ' || '123'))    // retorna o conteudo do primeiro true que econtrar

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido')