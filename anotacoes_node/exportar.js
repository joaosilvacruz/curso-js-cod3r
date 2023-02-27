// Formas de exportar com o node

console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// Apesar de mudar o valor de exports, não há mudança na saída porque o que é retornado é o module.exports
exports = null
console.log(module.exports)

// Caso mude o valor de module.exports, esse valor que sera exportado.
module.exports = {publico: true}