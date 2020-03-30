function clique(){     
    var sexo = ''
    var anoNasc = document.getElementById('anoNasc')   
    var resul = document.getElementById('foto')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')


   if (anoNasc.value.length == 0 || anoNasc.value > 2020) {
       window.alert('!ERRO! - Digite um ano de nascimento valido - ')
   }
   else {
    var fsex =  document.getElementsByName('genero') 
    var idade =  2020 - (anoNasc.value) 
   }

   if (fsex[0].checked){
        sexo = 'Homem'
        if(idade >=0 && idade <10){
            img.setAttribute('src', 'foto-bebe-m.png')
            
        }else if(idade < 21 ){
            img.setAttribute('src', 'foto-jovem-m.png')

        }else if (idade < 50){
            img.setAttribute('src', 'foto-adulto-m.png')
        }  else {
            img.setAttribute('src', 'foto-idoso-m.png')
        }
    }else if (fsex[1].checked){
        sexo = 'Mulher'
        if(idade >=0 && idade <10){
            img.setAttribute('src', 'foto-bebe-f.png')
        }else if(idade <21 ){
            img.setAttribute('src', 'foto-jovem-f.png')

        }else if (idade < 50){
            img.setAttribute('src', 'foto-adulto-f.png')
        }  else {
            img.setAttribute('src', 'foto-idoso-f.png')
        }
    }

    resul.innerHTML = `Detectamos um(a) ${sexo}, com ${idade} anos`
    resul.appendChild(img)       

    }
   
