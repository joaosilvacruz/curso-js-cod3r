// Mudanças na notação literal após ECMASCRIPT2015

const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c}

// Melhoria
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//funcao1: antiga forma
//funcao2: nova forma
const obj5 = {
    funcao1: function() {
    },
    funcao2(){

    }
}
console.log(obj5)
