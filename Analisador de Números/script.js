let n = document.getElementById('n1')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(num){
    if (Number(num) >= 1 &&  Number(num) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(num, l ){
    if(l.indexOf(Number(num))!= -1 ){
        return true
    }else{
        return false
    }

}

function add(){
    if (isNumero(n.value)&& !inLista(n.value, valores)){
        valores.push(Number(n.value)) // adicionar no vetor valores um numero, ao clicar no botao adicionar)
        let item = document.createElement('option') // criar um elemento dentro do select
        item.text = `Valor ${n.value} adicionado`
        lista.appendChild(item) //Adicionar item a lista , que é o id da minha select        
        res.innerHTML = ''    

    }else {
        window.alert('Valor inválido ou ja encontrado na lista')
    }
        n.value = '' // apagar o valor dentro do input number
        n.focus()
}


function final(){
    if (valores.length == 0){
        window.alert('adicione valores')
    }else{
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0 


        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }


            media = soma / tot
            res.innerHTML = ''
            res.innerHTML +=  `<p> Ao todo temos ${tot} números cadastrados</p>`
            res.innerHTML +=  `<p>O maior valor informado foi ${maior}</p>`
            res.innerHTML +=  `<p>O menor valor informado foi ${menor}</p>`
            res.innerHTML +=  `<p>A soma dos valores é ${soma}</p>`
            res.innerHTML +=  `<p>A media dos valores é ${media.toFixed(2)}</p>`

    }


}
