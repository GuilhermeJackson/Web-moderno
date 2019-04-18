const escola = "Cod3r"

console.log(escola.charAt(4))   //Retorna o conteudo encontrado no indice 4 levando em consideração o indice 0
console.log(escola.charAt(100)) //Retorna ultimo indice
console.log(escola.charCodeAt(3))   //retorna indice na tabela unicode/ASCC www.unicode-table.com
console.log(escola.lastIndexOf('3'))  //retorna o valor 3 da variavel

console.log(escola.substring(1))    //retorna conteudo apartir do indice 1
console.log(escola.substring(0,3))  //retonar o conteudo entreo o indice 1 e 3

console.log('Escola'.concat(escola).concat("1"))    //contatenação de literal com variavel
console.log('Escola' + escola + "1")    //contatenação de literal com variavel
console.log(escola.replace(3 , 'e'))    //converte o 3 da variavel para 'e'

console.log('Maria,Joao,Pedro,Marconha'.split(','))  //split gera um array usando a virgula como separador