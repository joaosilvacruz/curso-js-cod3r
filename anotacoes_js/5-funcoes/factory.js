const prod1 = {
    nome: 'Celular',
    preco: 1000,
}

const prod2 = {
    nome: 'Celular',
    preco: 1500,
}

// Função factory simples
// É uma função que retorna um objeto.

function criarProduto() {
    return {
        nome: 'Celular',
        preco: 1700
    }
}

console.log(criarProduto())
