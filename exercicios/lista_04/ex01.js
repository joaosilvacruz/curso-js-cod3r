const operacao = function (x, y){
    soma = x + y
    sub = x - y
    mult = x * y
    div = x / y
    return `
    A soma é ${soma}
    A subtração é ${sub}
    A multiplicação é ${mult}
    A divisão é ${div}`
}

console.log(operacao(3, 2))