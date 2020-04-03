let num = [5,8,9]
num[3] = 5 // adiciona o numero 5 na vaga 3 do array
num.push(7) // adiciona numero 7 no final
num.sort() // coloca em ordem crescente
num.length // diz quantas posições existem no vetor
var pos = num.indexOf(8) // vai procurar e dizer onde esta o valor 8 no array, caso ele retorne -1 , significa que nao tem o numero procurado.

console.log(`${num}`) // mostra os valores
if(pos == -1){
    console.log(`verifique o valor e tenta novamente`)
}else{
    console.log(`o valor 8, esta na posição ${pos}`)
}
