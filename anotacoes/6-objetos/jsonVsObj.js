// JSON é um formato textual de DADOS
// Não irá imprimir funções
const obj = {a: 1, b: 2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) 

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{'a':' 1, 'b': 2, 'c': 3}"))

// Formato válido de JSON, cada atributo precisa estar em aspas duplas
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": "string"}'))