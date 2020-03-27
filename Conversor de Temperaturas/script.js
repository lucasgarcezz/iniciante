var botao = document.getElementById('botao')
botao.addEventListener('click', clicou )

function clicou(){
    botao.innerHTML = window.prompt('Digite a temperatura em C°(Celcius)')
    var graus = Number(botao.innerHTML)
    var temp = document.getElementById('resul')
    var kelvin = (graus +  273.15)
    var fah = (graus * 9/5) + 32
    temp.innerHTML = (`<h1>A temperatura ${graus}°C , correspode a...</h1>
    <br> ${kelvin.toFixed(2)}°K (kelvin) 
    <br>${fah.toFixed(2)}°F (fahrenheit)`)


}