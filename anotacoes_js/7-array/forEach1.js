const aprovados = ['Ana', 'Gabriel', 'Daniel', 'Lais']

// forEach percorre cada elemento de um array, para isso você precisa dar uma função callback como parâmetro
// Ele possui 3 parâmetros -> nome, indice e array

// Percorrendo array a partir do forEach, retornando elementos e indices
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}: ${nome}`)
})

// Percorrendo um array a partir do forEach, retornando apenas os elementos
aprovados.forEach(nome => console.log(nome))

// Criando uma função e usando para percorrer com função
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)