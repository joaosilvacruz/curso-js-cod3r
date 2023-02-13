// Primeiro caso
console.log('a = ', a)
var a = 2
console.log('a = ', a)

// O segundo caso é o que ocorre na prática com o primeiro caso
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)

// O hoisting não ocorre quando se atribui uma variável com let
console.log('b = ', b)
let b = 2
console.log('b = ', b)