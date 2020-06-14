function carregar(){
    var vMsg = window.document.querySelector('div#idMsg')
    var vImg = window.document.querySelector('img#idImage')
    var data = new Date()
    var hora = data.getHours()
    vMsg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 6){
        //BOA MADRUGADA!!
        vImg.src = 'madrugada.png'
        window.document.body.style.background = '#162a2b'
    }else if(hora < 12){
        //BOM DIA!!
        vImg.src = 'manha.png'
        window.document.body.style.background = '#e2cd9f'
    }else if(hora < 18){
        //BOA TARDE!!
        vImg.src = 'tarde.png'
        window.document.body.style.background = '#b9846f'
    }else if(hora <= 23){
        //BOA NOITE!!
        vImg.src = 'noite.png'
        window.document.body.style.background = '#515154'
    }
}