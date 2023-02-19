function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 5000,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // retorna o NaN já que não há preco e desc 
global.preco = 100
global.desc = 0.2
console.log(getPreco()) // retorna um valor por conta do global atribuído
console.log(produto.getPreco()) // retorna um valor porque acessa os parâmetros do objeto produto

const carro = {preco: 6000, desc: 0.30}
console.log(getPreco.call(carro)) // A função call possibilita o retorno dos parâmetros
console.log(getPreco.apply(carro)) // A função apply também possibilita o retorno dos parâmetros

// Diferença entre call e apply
// call -> parâmetros separados por vírgula
// apply -> parâmetros separados por array
console.log(getPreco.call(carro, 0.20, '$'))
console.log(getPreco.apply(carro, [0.20, '$']))