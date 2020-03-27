var botao = document.getElementById('b1')
botao.addEventListener('click', clicar)

function clicar (){
    botao.innerHTML = prompt('Digite um valor qualquer')
    var valor = Number(botao.innerHTML )
    var ant = valor - 1 
    var suc = valor + 1
    var resultado = prompt (`Antes de ${valor}, temos o numero ${ant} \nDepois de ${valor}, temos o numero ${suc} `)

}