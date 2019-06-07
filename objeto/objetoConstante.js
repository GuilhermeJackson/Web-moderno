/* pessoa -> 123 -> {...Object...}  */
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)
/* pessoa aponta para o endereço de memória 123 e o endereço de memoria 123 aponta para o objeto.
Quando pessoa.nome é atribuido em cima do nome, é alterado o Object e não o endereço de memória
*/


//pessoa = {nome: 'Ana'}

/* pessoa -> 456 -> {...Object...} */
/* nesse caso a pessoa está tentando apontar para o endereço de memória
456, mas na verdade lá em cima já esta apontando para 123. LOGO VAI DAR ERRO
*/

Object.freeze(pessoa)   //.freeze = congela object e endereço de memoria, não podendo inserir/remover/alterar nada

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)