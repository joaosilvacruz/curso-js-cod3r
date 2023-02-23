// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 80000,
    proprietario: {
        nome: 'Raul',
        idade: 30,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 20
    },
    {
        nome: 'Mirian',
        idade: 22,
    }],
    calcularValorSeguro: function() {
        return 80000 * 0.1
    }   
}
// Acesso por notação ponto ou colchetes
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)
