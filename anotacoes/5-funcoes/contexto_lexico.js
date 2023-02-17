// Como minhaFuncao foi criada no contexto em que está mais próximo do valor 'Global', apesar chamá-la dentro da função exec com o valor 'Local', ainda terá o valor como 'Global' pois ela se refencia ao contexto em que foi criada.

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
