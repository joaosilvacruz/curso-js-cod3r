function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv = trabalho1 && trabalho2
    const comprarTablet = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, comprarTablet, comprarTv, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(false, false))