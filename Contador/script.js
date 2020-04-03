function clique(){
    var inicio = document.getElementById('n1')
    var final = document.getElementById('n2')
    var pulo = document.getElementById ('pulo')
    var i = Number(inicio.value)
    var p = Number(pulo.value)       
    var f = Number (final.value)
    var resul = document.getElementById('resultado')
    resul.innerHTML = 'Contando : '
    
    if( final.value.length == '' || pulo.value.length == '' ){
        resul.innerHTML = 'ERRO , VERIFIQUE OS VALORES NOVAMENTE'
    }else{

    while (i <= f){
        resul.innerHTML += `${i} ` //ao inves de receber (=) vai concatenar (+=)
        
        i = i + p
        
       
    }
    
}

}