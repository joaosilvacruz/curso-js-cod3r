function divisao (a, b){
    resultado = a / b
    resto = a % b
    return `
    resultado: ${resultado}
    resto: ${resto}`
}
console.log(divisao(5,3))