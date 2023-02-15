//Else IF serve para utilizar estrutura if else com mais de uma condição.
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)){
        return 'Laureado'
    }else if (nota.entre(7, 8.99)) {
        return 'Reprovado'
    }else if (nota.entre(4, 6.99)){
        return 'Recuperação'
    }else if (nota.entre(0, 3.99)){
        return 'Reprovado'
    }else{
        return 'Nota inválida'

    }
}

for (i=0; i<=10; i++) {
    resultado = imprimirResultado(i)
    console.log("Com a nota "+ i + " Você está " + resultado)
}