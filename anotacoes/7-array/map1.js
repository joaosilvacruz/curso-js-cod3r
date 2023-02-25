const nums = [1, 2, 3, 4, 5]

// Map é um for com um propósito, ou seja, quando você deseja realizar algo nos elementos do array

// Map não transforma o array atual, por isso a necessidade de armanezar dentro de uma variável

let resultado = nums.map(function(elemento){
    return elemento * 2
})

console.log(resultado)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

let resultado10 = nums.map(soma10)
console.log(resultado10)

// Map encadeado -> Map seguido de outros map
let resultadoFinal = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultadoFinal)