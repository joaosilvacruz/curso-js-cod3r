
//Desafio para Calcular a área de uma circunferência
const PI = Math.PI

function calcarArea(raio){
    area = raio * raio * PI
    return area
}

calcarArea(3)
console.log('a area é: ' + calcarArea(3) + 'm²')