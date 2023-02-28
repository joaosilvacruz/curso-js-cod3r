// Escrevendo arquivo no disco

const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1500,
    desconto: 0.15
}

// Para escrever um arquivo é necessário passar os parâmetros __dirname + 

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})
