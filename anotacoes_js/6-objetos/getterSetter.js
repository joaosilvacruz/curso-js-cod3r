const sequencia = {
    _valor: 1, //convenção de utilizar _ para representar variaveis privadas
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

// Acessando a partir do get e set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)