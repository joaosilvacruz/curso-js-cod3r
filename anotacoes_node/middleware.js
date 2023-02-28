// middleware pattern (chain of responsability)
// padrão que passa de um objeto para outro (de um middleware para outro)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'middleware1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'middleware2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'middleware3'

// Criando uma função exec, que irá receber um contexto e um array de middlewares
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
              middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)


