// Usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.desc = desc
}
const prod1 = new Produto('celular', 5000, 0.1)
console.log(prod1)

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome, 
        salarioBase,
        faltas, 
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 5000, 3)
const f2 = criarFuncionario('Maria', 10000, 2)
console.log(f1.getSalario())

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "sou um Json"}')
console.log(fromJSON.info)