// Apesar da variável ter sido criada dentro da função, mesmo assim ela terá escopo global
const funcs =[]

for (var i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}


console.log(funcs)
funcs[2]()