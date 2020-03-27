
var b0 = document.getElementById('b1')
var b1 = document.getElementById('b2')
var b2 = document.getElementById('b3')

b0.addEventListener('click', cb0)
b1.addEventListener('click', cb1)
b2.addEventListener('click', cb2)

function cb0 (){
    b0.innerHTML = alert('Você clicou no Botão 1')
    
}
function cb1 (){
    b1.innerHTML = alert('Você clicou no Botão 2')         
}
function cb2 (){
    b2.innerHTML = alert('Você clicou no Botão 3')         
}





