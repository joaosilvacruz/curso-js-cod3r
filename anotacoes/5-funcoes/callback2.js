const notas = [7.7, 5.2, 5.6, 2.3, 5.1, 1.4, 8.9]

// Sem callback
let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com callback
notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

// Com callback e arrow function
notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Com callback e arrow function reutilizada
notasMenores7 = nota => nota < 7
notasBaixas4 = notas.filter(notasMenores7)
console.log(notasBaixas4)