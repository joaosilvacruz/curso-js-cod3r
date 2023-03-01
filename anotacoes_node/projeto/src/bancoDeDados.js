const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

// Salvando o produto caso ele não exista
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
        produtos[produto.id] = produto
        return produto
}

// Retornando o produto caso ele existe ou retornando objeto vazio caso não exista
function getProduto(id) {
    return produtos[id] || {}
}

// Retornando todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

// Excluindo produtos
function excluirProdutos(id) {
    const produto = produtos[i]
    delete produtos[i]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos}