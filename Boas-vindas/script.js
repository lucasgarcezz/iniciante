
 var desafio = document.getElementById('botao')

 desafio.addEventListener('click', click1)

 function click1() {
     desafio.innerHTML = window.prompt('Qual é o seu nome?')
     var nome = desafio.innerHTML
     var clique2 = window.prompt(`Olá ${nome}! Quantos anos você tem?`)
     var idade = clique2
     var clique3 = alert(`Acabei de conhecer o ${nome}, que tem ${idade} anos de idade!`)
   
 }
