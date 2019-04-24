{
    {
        {
            var sera = 'Será????'
            console.log(sera)
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)  //retornar o valor apenas se tiver dentro do escopo da funcao
}

teste()
//Sconsole.log(local)  //não retornar o valor pq nao esta dentro do escopo da funcao

/*
Quando criar uma variavel fora de um escopo, ela é global pois fica armazenada no Window.
Quando a variavel é criada dentro do escopo de uma funcao, ela nao é global, ela só pode ser chamada dentro da funcao

Evitar variavel global: pq qualquer sobreescrita sobre a variavel pode causar problemas
*/