// variáveis com let possuem escopo de bloco, independente de ser função ou não
var numero = 1
{
    let numero = 2
    console.log(numero)
}
console.log(numero)