// IIFE -> Immediately Invoked Function Expression
// Função imediatamente invocada.
// Usado para fugir do escopo global
// Como utilizar: Envolve a função em parêntese e a invoca em seguida.
// (função(){})()
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()