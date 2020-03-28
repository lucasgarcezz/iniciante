          
    
function clicou (){
        var velocidade = document.getElementById('txtn')
        var vel = Number(velocidade.value)
        var resul = document.getElementById('resultado') 
        var diferenca = vel - 60

    if (vel >=61 ){
        resul.innerHTML = (`Você está com ${vel}Km/h e ultrapassou a velocidade máxima<br>
        Está com ${diferenca}Km/h a mais do que o permitido  <br> 
        Você será <strong>Multado</strong>`)
    } else{
        resul.innerHTML = (`Você esta dentro o limite de velocidade permitido.`)
    }
        
   
}
