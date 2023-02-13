// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) =>{
    return a + b
}
console.log(soma(5,8))

// Retorno implícito numa arrow function
const sub = (a, b) => a-b
console.log(sub(5,2))