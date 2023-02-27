const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')
const contadorD = require('./instanciaNova')

// Com a forma de instância única, o contador B ficará com o valor de contadorA apesar dele não ter sido chamado.
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

// Com a forma de instância nova (com factory), o contador C e D serão independentes.
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)