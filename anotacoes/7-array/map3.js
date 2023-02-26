Array.prototype.mapCriado = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Lapis", "preco": 2.50 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

let precos = carrinho.mapCriado(paraObjeto).mapCriado(apenasPreco)
console.log(precos)