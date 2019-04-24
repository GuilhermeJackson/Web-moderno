var numero = 1
{
    var numero = 2
    console.log('dentro:', numero)
}

console.log('fora =', numero)   
/*
Criando um var global e um var dentro do escopo de uma funcao,
 se imprimir fora do escopo, retorna o var de dentro da funcao
No caso retorna o número dois
 */