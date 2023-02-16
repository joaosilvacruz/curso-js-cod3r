const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito de paradigma funcional e OO

const falaDePessoa = pessoa.falar.bind(pessoa) // Bind "amarra" o this do objeto na chamada.
falaDePessoa()