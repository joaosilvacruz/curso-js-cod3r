// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)

}
imprimirSoma(2, 3)

// Funcao com retorno
function soma(a, b=0){
    return a + b
}
valor = soma(2,3)
console.log(valor)