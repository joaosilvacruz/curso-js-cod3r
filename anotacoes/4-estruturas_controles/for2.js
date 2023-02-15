// For in para percorrer um array
const notas = [6.7, 7.5, 5.2, 5.3, 4]
for (let i in notas){
    console.log(i, notas[i])
}

// For in para percorrer um objeto
const pessoa = {
    nome: 'Ana',
    idade: 20,
    peso: 65
}
for (let atributo in pessoa){
    console.log(atributo, pessoa[atributo])
}

