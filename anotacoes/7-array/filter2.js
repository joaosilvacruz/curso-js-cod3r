// Implementando a função filter
Array.prototype.filterCriado = function(callback){
    const newArray = []
    for(let i =0; i<this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4000, fragil: true},
    {nome: 'Copo de vidro', preco: 12, fragil: true},
    {nome: 'Copo de plastico', preco: 15, fragil: false}
]


const caro = produto => produto.preco >= 2000
const fragil = produto => produto.fragil

// Filtros encadeados
console.log(produtos.filterCriado(caro).filterCriado(fragil))