const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))    //Imprimi chaves do objecto pessoa
console.log(Object.values(pessoa))  //imprimi os valores das chaves do objeto
console.log(Object.entries(pessoa))    //imprimi as chaves e valores (entries cria um array e percorre o mesmo)

Object.entries(pessoa).forEach(([chave, valor]) => { //usando destruct
    console.log(`${chave}: ${valor}`)   //usando destruct
})

Object.defineProperty(pessoa, 'dataNascimento', { //define propriedade de um objeto (pode ou nao ser alterado)
    enumerable: true, // falando q vai ser listada
    writable: false,    //Não pode ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'    //imprimi 01/01/2019
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))    //enumera as chaves sem valores

//Obejct.assing (EXMAScrip 2015)
const dest = {a: 1 }    // a recebi 4
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }   // a recebi 4
const obj = Object.assign(dest, o1, o2)    //inseri os atributos o1 e o2 dentro do dest q é armazenado no obj
console.log(dest)
console.log(obj)