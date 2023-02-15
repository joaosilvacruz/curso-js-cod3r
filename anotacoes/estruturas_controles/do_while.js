// No do-while sempre há a primeira iteração, apesar da condição.

function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let i = 5
do {
    i = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${i}.`)
} while (i!=5)


console.log('O valor foi encontrado!')