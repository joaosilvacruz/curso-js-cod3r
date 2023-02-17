//Callback é uma função que retorna algo quando determinado evento acontecer.

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)

}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

// Realizando com arrow functions
// O que está ocrrendo é um loop nesse callback, retornando cada elemento da lista
fabricantes.forEach(fabricante => console.log(fabricante))