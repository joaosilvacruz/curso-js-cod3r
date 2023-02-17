// A diferença entre a function declaration e a expression declaration é que na declaration aplica-se o hoisting.
// Uma vez que a variável na expression não foi declarada ainda
console.log(soma(3, 4)) // hoisting
console.log(sub(3, 4)) // erro

// function declaration
function soma(x, y) {
    return x+y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y){
    return x * y
}

