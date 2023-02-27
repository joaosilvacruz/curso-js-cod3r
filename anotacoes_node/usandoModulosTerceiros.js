// Normalmente para referenciar o lodash utiliza-se _
// Abaixo utiliza-se o método .random() da biblioteca lodash
const _= require('lodash')
setInterval(() => console.log(_.random(1, 150)), 2000)