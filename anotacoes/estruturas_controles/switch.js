//O switch funciona como uma sequência de if, porém apenas para valores exatos, ou seja não é possível colocar valores "entre"
//Caso um case não esteja com nenhuma atribuição, ele pulará para o primeiro abaixo.
//A palavra reservada break serve para parar o código naquele case, se não for utilizada continuará entrando nos outros cases.

const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Laureado')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')    
    }
}

imprimirResultado(10)
imprimirResultado(5)