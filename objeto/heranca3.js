const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', //dando valor ai nome da filha2
    writable: false, //se pode alterar = negativo/falso
    enumerable: false } // não pode conter numeros
    })

    console.log(filha2.nome)
    filha2.nome = 'Carla'
    console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

    console.log(Object.keys(filha1))    //key é a chave do valor
    console.log(Object.keys(filha2))

    for (let key in filha2) {   //hasOwnProperty = exibe se o for veio do do Objeto ou por herança
        filha2.hasOwnProperty(key) ?    //var status = (idade >= 18) ? "adulto" : "menor";
            console.log(key) : console.log(`Por herança: ${key}`)

    }