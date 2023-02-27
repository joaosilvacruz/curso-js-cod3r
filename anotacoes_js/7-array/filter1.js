// Filter é usado para filtrar um array, geralmente no array retornado o tamanho é diferente do array original

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4000, fragil: true},
    {nome: 'Copo de vidro', preco: 12, fragil: true},
    {nome: 'Copo de plastico', preco: 15, fragil: false}
]

// Filtrando elementos com preco acima de 2000
console.log(produtos.filter(function(elementos){
    return elementos.preco > 2000
}))

const caro = produto => produto.preco >= 2000
const fragil = produto => produto.fragil

// Filtros encadeados
console.log(produtos.filter(caro).filter(fragil))