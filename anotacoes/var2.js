// Conflito existente no escopo global
var numero = 1

// Apesar de estar dentro de um bloco, o escopo é global. Para escopo local, apenas dentro de funções.
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ',numero)




