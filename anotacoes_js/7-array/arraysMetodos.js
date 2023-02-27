const pilotos = ['Vetel', 'Massa', 'Alonso', 'Felipe']

// .pop() -> Remove o último elemento
pilotos.pop()
console.log(pilotos)

// .push() -> Adiciona um elemento na última posição
pilotos.push('Verstappen')
console.log(pilotos)

// .shift() -> Remove o primeiro elmento
pilotos.shift()
console.log(pilotos)

// .unshift() -> Adiciona um elemento na primeira posição
pilotos.unshift('Gabriel')
console.log(pilotos)

// .splice() -> Pode adicionar e remover elementos 
// Adicionando com splice
pilotos.splice(2, 0, 'Bottas', 'Hamilton')
console.log(pilotos)

//Removendo com splice
pilotos.splice(3, 1)
console.log(pilotos)

// .slice() -> Divide o array e retorna um novo array que pode ser armazenado em uma variavel
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // -> indice 1 até o 4, onde o 4 nao ta incluso
console.log(algunsPilotos2)