const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Lapis", "preco": 2.50 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

let precos = carrinho.map(paraObjeto).map(apenasPreco)
console.log(precos)