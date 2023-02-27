// Com o let, há a permanência do escopo de bloco da função, imprimindo assim o valor correto.
const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[3]()