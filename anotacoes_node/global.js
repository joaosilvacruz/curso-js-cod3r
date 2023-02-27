// O global é um objeto global do node, em que todos os arquivos tem acesso a ele. Caso seja mudado ou adicionado algo no global, todos os arquivores terão acesso ao que foi adicionado
console.log(global)

global.MinhaApp = {
    saudacao() {
        return 'Olá mundo!'
    },
    nome: 'Sistema Legal'
}