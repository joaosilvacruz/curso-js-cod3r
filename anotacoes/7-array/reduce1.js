// Reduce é uma função que serve para transformar um array em um elemento.
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const alunos = [
    {nome: 'João', nota: 7.5, bolsista: false},
    {nome: 'Pedro', nota: 8.5, bolsista: true},
    {nome: 'Miguel', nota: 9.5, bolsista: false},
]

const resultado = alunos.map( a => a.nota).reduce(function(acumulador, atual){
    console.log(`acumulador: ${acumulador}, atual: ${atual}`)
    return acumulador + atual
})

console.log(`O resultado final foi ${resultado}`)