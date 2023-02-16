// Neste exemplo, ao chamar a função pessoa vemos que quem está instanciando ele é a função setInterval,
// Com isso ocorre do THIS não estar amarrado como deveria, para isso utiliza-se o bind

function Pessoa() {
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this) , 1000)
}
new Pessoa

// Nesse caso para driblar a questão do this, utilizou-se uma constante que não irá variar e atribuiu this a ela.

function Pessoa2() {
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade+=2
        console.log(self.idade)
    }/*.bind(this)*/ , 1000)
}
new Pessoa2