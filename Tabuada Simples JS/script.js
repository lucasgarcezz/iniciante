function clique(){
    let num = document.getElementById('n1')
    let tab = document.getElementById('tabuada')
    let item = document.getElementById('opt')
    tab.innerHTML = '' //limpar


    if(num.value.length == 0){
        
        window.alert('Preencha os campos corretamente')
    }else {
        let n = Number(num.value)          
        let c = 1
        while (c<=10){
            let item = document.createElement('option')                             
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab${c}` // uso opcional em JS
            tab.appendChild(item)
            c++
            
        }       
    }

}