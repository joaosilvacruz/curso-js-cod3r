// Replicando o forEach, por meio da criação desse método e implementando ele para o objeto Array
Array.prototype.forEachCriado = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Gabriel', 'Daniel', 'Lais']

aprovados.forEachCriado(function(nome, indice){
    console.log(`${indice + 1}: ${nome}`)
})