console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos')
console.log(aprovados)

aprovados = ['Carlos', 'Bia', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Não retorna erro, e sim undefined

aprovados[3] = 'Paulo' // Adicionar/substituir elemento a partir de um índice
console.log(aprovados)

aprovados.push('Mirian')
console.log(aprovados.length)

aprovados[9] = 'Joao' // Adiciona um elemento no índice 9 e cria valores undefined nas posições que não existem
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

