// Estratégias para gerar valor padrão

// 1- Utilizar o operador OU para definir o valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
// No método 1, o OU é perigoso pois se passar o valor 0 ele é entendido como FALSO, assim o OU o tornará = 1. 
console.log(soma1(0, 2, 3))

// 2- Utilizar uma condição de caso o valor passado seja undefined, então retornar o valor padrão desejado.
function soma2(a, b, c){
    a = a !== undefined? a : 0
    b = b !== undefined? b : 0
    c = c !== undefined? c : 0
    return a + b + c
}

// 3- Utilizar uma condição de caso exista um valor em arguments, retornar o valor padrão desejado.
function soma3(a, b, c){
    a = 1 in arguments ? a : 0
    b = 1 in arguments ? b : 0
    c = 1 in arguments ? c : 0
    return a + b + c
}

// 4- Utilizar uma condição de caso exista o valor não seja um número (NaN) então retornar o valor padrão.
function soma4(a, b, c){
    a = isNaN(a) ? 0 : a
    b = isNaN(b) ? 0 : b
    c = isNaN(c) ? 0 : c
    return a + b + c
}
console.log(soma2(0))
console.log(soma3(0))
console.log(soma4(0, 0, 0))

// 5 - PARÂMETRO PADRÃO DO EC6
function soma3 (a = 0, b = 0, c = 0){
    return a + b + c
}

console.log('O valor da soma com o EC6 é: ' + soma3(1, 2))

