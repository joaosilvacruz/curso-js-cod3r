const alunos = [
    {nome: 'João', nota: 7.5, bolsista: false},
    {nome: 'Pedro', nota: 8.5, bolsista: true},
    {nome: 'Miguel', nota: 9.5, bolsista: false},
]
// Desafio 1: Todos os alunos são bolsistas?
// Desafio 2: Algum aluno é bolsista?

const desafio1 = alunos.map( b => b.bolsista).reduce(function(acumulador, atual){
    if (acumulador === true && atual == true){
        return true
    } else {
        return false
    }
})

console.log(`a resposta d1 é: ${desafio1}`)

const desafio2 = alunos.map( b => b.bolsista).reduce(function(acumulador, atual){
    if (acumulador === true || atual == true){
        return true
    } else {
        return false
    }
})

console.log(`a resposta d2 é: ${desafio2}`)


