function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let i = 0
let qtd_i = 0
while (i!=5){
    i = getInteiroAleatorio(-1, 10)
    qtd_i++
    console.log(`Opção escolhida foi ${i}.`)
}

console.log('O valor foi encontrado!')
console.log(`A quantidade de opções ncessárias para encontrar o valor foi ${qtd_i}`)