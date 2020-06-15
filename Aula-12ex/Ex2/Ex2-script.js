function verificar(){
    var data = new Date() 
    var ano = data.getFullYear()
    var anoUser = window.document.querySelector('input#idNasc')
    var res = window.document.querySelector('div#idRes')
    
    
    if(anoUser.value.length == 0 || Number(anoUser.value) > ano){
        window.alert('[EERRO] Verifique os dados e tente novamente!')
    }else{
        var vSex = window.document.getElementsByName('nSexo')
        var idade = ano - Number(anoUser.value)
        res.innerHTML = `Idade Calculada ${idade}.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','idPhoto')
       
        if(vSex[0].checked){
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                genero = 'uma criança'
                img.setAttribute('src','menino.png')
            }else if(idade < 21){
                //JOVEM
                genero = 'um jovem'
                img.setAttribute('src','o-jovem.png')
            }else if(idade < 50){
                //ADULTO
                genero = 'um homem'
                img.setAttribute('src','homem.png')
            }else{
                //IDOSO
                genero = 'um idoso'
                img.setAttribute('src','idoso.png')
            }
        }else if(vSex[1].checked){
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                genero = 'uma criança'
                img.setAttribute('src','menina.png')
            }else if(idade < 21){
                //JOVEM
                genero = 'uma jovem'
                img.setAttribute('src','a-jovem.png')
            }else if(idade < 50){
                //ADULTO
                genero = 'uma mulher'
                img.setAttribute('src','mulher.png')
            }else{
                //IDOSA
                genero = 'uma idosa'
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}