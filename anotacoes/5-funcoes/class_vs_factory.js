// Usando classe -> o this muda
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Factory -> o this não muda
const people = nome => {
    return {
        speak: () => console.log(`My name is ${nome}`)
    }
}

const p2 = people('João')
p2.speak()