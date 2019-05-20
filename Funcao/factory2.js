//factory usando o console para passar os valores é bastante utilizado
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2599.99))
console.log(criarProduto('iPad', 1199.49))