// Esse exemplo replica o exemplo dado no arquivo this_e_bind2.js
// Nesse caso, com a função arrow o this não varia em arrow function

function Pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa