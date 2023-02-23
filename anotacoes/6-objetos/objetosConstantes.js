// pessoa -> endereço de memória -> objeto
// Ao usar pessoa.nome, o endereço de memória de pessoa não é mudado, apenas o atributo nome
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- Endereço -> Objeto
// Ao tentar mudar o valor do objeto por completo, você está tentando mudar o endereço de memória.
// Gerando um erro pois inicialmente o objeto é const

// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // congelando o objeto, tornando ele totalmente constante
pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)