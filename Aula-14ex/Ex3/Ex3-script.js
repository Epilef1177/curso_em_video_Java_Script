function contar(){
    var vIn = window.document.querySelector('input#idIn')
    var vOut = window.document.querySelector('input#idOut')
    var vPass = window.document.querySelector('input#idPass')
    var vRes = window.document.querySelector('div#idRes')

    var vInN = Number(vIn.value)
    var vOutN = Number(vOut.value)
    var vPassN = Number(vPass.value)

    if(vIn.value.length == 0){
        window.alert('Início invalido')
    }else{
        if(vPass.value.length == 0){
            window.alert('Seu passo é 0. Estamos trocando por 1')
            vPassN = 1
        }
        
        vRes.innerHTML = `${vInN}->`
        while(vInN <= vOutN){
                vInN = vInN + vPassN
                vRes.innerHTML += `${vInN}->`
            }
    }        
    //vRes.innerHTML += `${vPass}`
    var vNum = window.document.querySelector('div#idPara')

    vNum.innerText = `${vInN},${vOutN},${vPassN)}.`
}