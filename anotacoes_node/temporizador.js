// Utilizando modulo do node para executar uma tarefa de 5 em 5 segundos
const schedule = require('node-schedule')

// Executando de 5 em 5 segundos, em qualquer minuto, hora, dia, mes, dia da semana. O caractere * representa para qualquer.
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('Executando Tarefa 1:', new Date().getSeconds())
})

// Cancelando a tarefa 2
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 2000)


// Criando uma tarefa que execute uma tarefa às 12h de cada dia da semana, de 30 em 30 segundos
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = (new schedule.Range(1, 5))
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2', new Date().getSeconds())
})