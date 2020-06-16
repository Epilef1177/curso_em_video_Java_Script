function contar(){
    var vIn = window.document.querySelector('input#in')
    var vOut = window.document.querySelector('input#out')
    var vPass = window.document.querySelector('input#pass')
    var vRes = window.document.querySelector('div#res')

    var vInN = Number(vIn.value)
    var vOutN = Number(vOut.value)
    var vPassN = Number(vPass.value)

    if(vIn.value.length == 0){
        window.alert('Início invalido')
        vRes.innerHTML = `[ERRO]Impossível contar!`
    }else{
        
        if(vOut.value.length == 0){
            window.alert('Seu fim é nulo. Adicione um número por favor.')
            vRes.innerHTML = `[ERRO]Impossível contar!`
        }else{
            if(vPass.value.length == 0 || vPass.value == 0 || vPass.value < 0){
                window.alert('Seu passo é inválido. Estamos trocando por 1')
                vPassN = 1
            }
            vRes.innerHTML = `Contando: <br/>`
            if(vOutN > vInN){
                //Contagem Crescente
                while(vInN <= vOutN){
                    vRes.innerHTML += `${vInN} \u{1F449}`
                    vInN = vInN + vPassN
                }
            }else if(vOutN < vInN){
                //Contagem Regressiva
                while(vInN >= vOutN){
                    vRes.innerHTML += `${vInN} \u{1F449}`
                    vInN = vInN - vPassN
                }
            }
            vRes.innerHTML += `\u{1F3c1}`
        }
    }         
}        
