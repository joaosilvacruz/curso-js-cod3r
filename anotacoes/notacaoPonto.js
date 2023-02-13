// Usos da notação '.' no javascript
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Joao'
obj1['nome'] = 'Joao2' // Retorna o mesmo que obj1.nome
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
console.log(obj2.nome)
const obj3 = new Obj('Mesa')
console.log(obj3.nome)
obj3.exec()
