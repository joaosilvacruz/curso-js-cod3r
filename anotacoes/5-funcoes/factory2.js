function criarProduto(nome, preco) {
    return{
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 2000))
console.log(typeof criarProduto('Celular', 2000))