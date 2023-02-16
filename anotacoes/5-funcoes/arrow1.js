//Função dobro
let dobro = function (a) {
    return 2 * a
}

// A função arrow é uma função anônima, para chamá-la novamente é necessário armazená-la em uma variável ou constante.

//Função arrow mas com muitas linhas
dobro = (a) => {
    return 2 * a
}

//Função arrow com única linha, com retorno implícito
dobro = a => 2 * a 

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())
