// var tem escopo global
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }      
}
console.log(sera)

// Uma variável definida dentro da função, tem escopo de função (local)
function teste(){
    var x = 123
}
teste()
console.log(x)
