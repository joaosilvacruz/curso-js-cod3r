function tratarErroEImprimir(err){ //Função criada no catch, irá retornar algo para tratar o erro
    throw new Error('...')
}
function imprimirMaiusculo(obj) {
    try{ //Tentar realizar um comando
    console.log(obj.name.toUpperCase() + '!')
    } catch (err){ //Capturar o erro
        tratarErroEImprimir(err)
    } finally { //imprimir ocorrendo um erro ou não
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirMaiusculo(obj)