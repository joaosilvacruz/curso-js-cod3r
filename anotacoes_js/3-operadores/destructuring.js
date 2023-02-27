// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: '5',
    endereco: {
        logradouro: 'Rua 123',
        numero: 1000
    }
}

// Operador destructuring
const {nome, idade} = pessoa
console.log(nome)

// Usando destructuring atribuindo valores aos dados retirados
const {nome: n, idade: i} = pessoa
console.log(n, i)