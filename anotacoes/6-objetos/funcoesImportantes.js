const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Object.keys() -> retorna as chaves do objeto
console.log(Object.keys(pessoa))
// Object.values() -> retorna os valores das chaves do objeto
console.log(Object.values(pessoa))
// Object.entries() -> retorna um array com chaves e valores
console.log(Object.entries(pessoa))

// Usando object.entries e percorrendo o array por meio do forEach e destructuring
Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Object.defineProperty -> definindo propriedade com condições específicas
Object.defineProperty(pessoa, 'dataNascimento', {
    enumrable: true,
    writable: false,
    value: '01/01/2019'
})
console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '01/01/2018'
console.log(pessoa.dataNascimento) // writable: false -> não deixa modificar o atributo

// Object.assign (ES6) -> Concatena atributos de outros objetos em um objeto escolhido
const dest = { a:1 }
const o1 = { b: 2}
const o2 = { c:3, a: 4}
const obj = Object.assign(dest, o1, o2)

// Object.freeze() -> Congela o objeto, tornando ele constante
Object.freeze(obj)
obj.c = 1234
console.log(obj)