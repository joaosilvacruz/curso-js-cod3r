// fs é um módulo FILE SYSTEM
const fs = require('fs')

// __dirname se trata do repositório atual
const caminho = __dirname + '/arquivo.json'

// leitura sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// leitura assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// Leitura de pastas
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})