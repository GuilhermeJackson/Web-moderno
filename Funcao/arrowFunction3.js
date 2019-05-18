let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  //this é estritamente igual ao global

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)  //this dentro do object não é global
comparaComThis(obj) // this dentro de um object é outro object

let comparaComThisArrow = param => console.log(this === param)  //this com errow não é global
comparaComThisArrow (global)    //diferente de uma funcao sem arrow, this com errow não é global
comparaComThisArrow(module.exports) //acessado dentro do arquivo do node apartir do uso do this

comparaComThisArrow = comparaComThis.bind(obj)
comparaComThisArrow(obj)    //this não é estritamente um object e sim uma function
comparaComThisArrow(module.exports)     //false