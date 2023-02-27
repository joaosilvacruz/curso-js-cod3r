// IF-ELSE 
const imprimirResultado = function(nota){
    if(nota >=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

// IF-ELSE com arrow function
const printResult = (nota) =>{
    if(nota >=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

// IF-ELSE operador ternário
const imprimir = (nota) => nota>=7 ? console.log('Aprovado'): console.log('Reprovado')

imprimirResultado(5)
printResult(8)
imprimir(8)
