// Uma função anônima é uma função sem nome

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

// É possível utilizar a função anônima como parâmetro de uma função
imprimirResultado(3,4, function(x, y){
    return x - y
})

//Arrow functions sempre são funções anônimas
imprimirResultado(3, 4, (x, y) => x * y)

//Função anônima no objeto
const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()