function verificarAprovacao(nota) {
    if (nota >= 7) {
        console.log('Você está aprovado')
    } else {
        console.log('Você está reprovado')
    }
}

verificarAprovacao(null)

// Caso você não use chaves, o if irá imprimir apenas uma sentença (a primeira)
function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')
}
teste1(8)


