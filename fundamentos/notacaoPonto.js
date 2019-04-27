console.log(Math.ceil(6.1)) // Aredonda o valor (ceil significa teto)
console.log(Math.floor(6.1))    // Aredonda pra baixo

const objt1 = {}
objt1.nome = 'Bola' // dando valor para o atributo nome
objt1['nome'] = 'Bola2'   // outra formar de dar valor a um atributo
console.log(objt1.nome)

function Obj(nome){
    this.nome = nome    // this.nome faz com que possar ser chamada fora do escopo da function
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') // invoca o this.nome da function e diz q obj2 tem o nome cadeira
const obj3 = new Obj('LOCURA')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

// Acessar os membros deum object ou function a partir da notação ponto (this.nome),(obj.nome)