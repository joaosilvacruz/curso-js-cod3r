
//Declarando array
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[3])

//Atribuir um valor a um index que não existe, ocorre a criação desse index com o valor atribuido
valores[4] = 10
console.log(valores[4])

//Acessar um index que não existe, pulando posições, cria-se indexs anteriores com valores vazios
valores[10] = 5
console.log(valores)

//Métodos
//.length --> retorna a quantidade de elementos do array
console.log(valores.length)

//.push --> Adiciona novos elementos no array
valores.push('teste')
console.log(valores)

//.pop --> remove o último valor do array
valores.pop()

//delete array[indice] --> remove o valor com o índice específicado
delete valores[0]
console.log(valores)

//typeof array retorna um objeto
console.log(typeof valores)