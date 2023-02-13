let valor // Não inicializada
console.log(valor) //Undefined

x = null //Ausência de valor

console.log(x) //Imprime o valor null
// console.log(x.toString()) //Erro

const prod = {

}
console.log(prod.preco) //undefined
prod.preco = 3.50
console.log(prod)

prod.preco = undefined //evitar atribuir undefined
console.log(!!prod.preco)