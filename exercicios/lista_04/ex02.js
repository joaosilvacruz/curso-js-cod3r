const triangulo = function(l1, l2, l3) {
    if (l1 == l2  && l2== l3) {
        return 'O triângulo é equilátero'
    } else if (l1 != l2  && l2!= l3) {
        return 'O triângulo é escaleno'
    } else {
        return 'O triângulo é isósceles'
    }
}

console.log(triangulo(3, 5, 2))