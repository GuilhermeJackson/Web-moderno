const valores = [7.7 , 8.9 , 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[7000000])

valores[4] = 10
console.log(valores)
console.log(valores.length) //length = retorna quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')  //adicionar novos elementos no array
console.log(valores)

console.log(valores.pop())  //pop remove o ultimo elemento do array
delete valores[0]
console.log(valores)    //removeu o ultimo elemento e removeu o elemento de indice 0

console.log(typeof valores) 

//array pode ter varios tipos de valores dentro dele