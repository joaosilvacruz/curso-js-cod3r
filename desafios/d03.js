//Converta a classe seguinte em uma função construtora:
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//Solução
function Pessoa1(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa1('Victor')
p2.falar()