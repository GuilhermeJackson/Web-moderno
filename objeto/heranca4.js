function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1. __proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome pe ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__= MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo a locura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


/*

'a funcao 'MeuObjeto' tem o prototype q aponta para o objeto 'MeuObjetoprototype' (q pode ter atributos normais),
e q tem o [[prototype]] também q aponta para o 'Object.prototype'. A funcao 'MeuObjeto' tem o [[Prototype]] q aponta para 'Funtion.prototype' q por sua vez é apontado para Object.prototype
*/