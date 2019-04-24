var numero = 1
{
    let numero2 = 2
    console.log('Dentro primeiro:', numero) // Permanece o 1 por estar com escopo menos robusto
}
{
    let numero = 3
console.log('Dentro segundo:', numero)  //Permance o 3 por estar no mesmo grau de escopo que o var
}

console.log('Fora =', numero)   //Permance o 1 por não ter que entrar numa funcao pra imprimir um resultado

/*
"Imprimir" da preferencia pra quem ta no escopo a não ser que nome da funcao seja diferente da variavel global


*/