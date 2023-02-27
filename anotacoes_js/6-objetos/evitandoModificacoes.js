// Object.preventExtensions -> Proibe adicionar novos atributos, porém permite excluir e modificar os existentes
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.90, tag: 'promocao'
})

// Imprime se o objeto é extensível
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Escolar branca' // Não modifica nada
delete produto.tag // é possível deletar
console.log(produto)

// Object.seal -> Sela o objeto, ou seja, não é possível adicionar nem excluir atributos, mas é possível modificar os existentes
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //Não modifica
delete pessoa.nome // Não exclui
pessoa.idade = 20 // É possível modificar
console.log(pessoa)

// Object.freeze -> Valores constantes