require('./global')

console.log(MinhaApp.saudacao())
console.log(MinhaApp.nome)

// Por default é possível mudar o atributo, mesmo ele sendo global
MinhaApp.nome = 'Mudando o atributo'
console.log(MinhaApp.nome)