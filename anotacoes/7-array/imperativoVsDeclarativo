const alunos = [
    {nome: 'Joao', nota: 8.0},
    {nome: 'Maria', nota: 5.7},
    {nome: 'Pedro', nota: 9.2},
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
media = total1/alunos.length
console.log(media)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
media2 = total2/alunos.length
console.log(media2)

