// Com o indexOf é possível "pegar" parâmetros de acordo com tags no próprio terminal
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

// Sem passar o parâmetro anônimo
// Stdin -> standart input (receber vaores)
// Stdout -> standart output (imprimir no console)
if(anonimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome:')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!`)
        process.exit()
    })
}
