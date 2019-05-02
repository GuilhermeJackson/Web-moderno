/*
Tabela verdade e:   / operador binario
v e v = v
v e f = f
f e ? = f

Ou  / operador binario  /   ||
v ou ? = v
f ou v = v
f ou f = f

Ou Exclusivo    /   operador binario
v xor v = v
v xor f = f
f xor v = v
f xor f = v

negação /   operador uniario
!v = f
!f = v
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2   // ou
    const comprarTv50 = trabalho1 && trabalho2  // e
    //const comprarTv32 = !! (trabalho1 ^ trabalho2)  //ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2  //ou exclusivo mais simples
    const manterSaldavel = !comprarSorvete  // operador uniario
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaldavel}
}
console.log('True e True', (compras(true, true)))
console.log('True e False', (compras(true, false)))
console.log('False e True', (compras(false, true)))
console.log('False e false', (compras(false, false)))