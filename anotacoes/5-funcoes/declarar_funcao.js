// A função no javascript é tida como um dado qualquer, por isso é possível:

// Criar uma função de forma literal
function func1() {}

// Armazenar uma função em uma variável
const func2 = function() {}

// Armazenar uma função dentro de um array
const array = [function (a,b) {return a+b}, func1, func2]
// Chamando a função que está dentro do array
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar uma função como parâmetro
function run(funcao){
    funcao()
}

function olaMundo(){
    console.log('Olá mundo!')
}

// Executando as funções que estão como parâmetros das funções
run(function(){console.log('Executando a função')})
run(olaMundo)

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(5,6)(5)