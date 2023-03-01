const porta = 3004

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // .send() converte para JSON 
    
})
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
