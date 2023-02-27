// Flat map é um map associado com um concat

//Solução sem flatmap
const escola = [
    {
        nome: 'Turma M1',
        alunos:[{
            nome: 'Joao',
            nota: 9.5
        },{
            nome: 'Ana',
            nota: 8.5
        }]
    }, 
    {
        nome: 'Turma M2',
        alunos: [{
            nome: 'Maria',
            nota: 7.5
        },{
            nome: 'Joana',
            nota: 8.6
        }]
}]

const getNotasAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotasAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

// Solução com flatmap
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}