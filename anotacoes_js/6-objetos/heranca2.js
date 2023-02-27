// Cadeira de protótipos (prototype chain)
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'} // pai herda de avo
const filho = {__proto__: pai, attr3: 'C'} // filho herda de pai
console.log(filho.attr1, filho.attr2, filho.attr3)

// Outra forma
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this,this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing -> reutilizando uma propriedade com valores diferentes.
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // Super -> método do protótipo
    }
}

// Método setProtorypeOf -> estabelece relação de protótipo. Ferrari é protótipo de carro.
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(volvo) // Imprime apenas os métodos pertences ao objeto, mas ele possui a relação de herança ainda
volvo.acelerarMais(100)
console.log(volvo.status())

