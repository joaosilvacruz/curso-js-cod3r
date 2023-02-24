// Como o tipo de String, Array, Object são funções é possível acessar o protótipo dessas estruturas
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Manipulando o protótipo de uma string para criar um novo método
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

// Manipulando o protótipo de um array para criar um novo método
Array.prototype.first = function(){
    return this[0]
}
console.log([5, 6, 8].first())

// Cuidado ao manipular protótipos já existentes
String.prototype.toString = function() {
    return 'Erro'
}

console.log('Escola Cod3r'.reverse()) // O reverse é aplicado no return do toString()
