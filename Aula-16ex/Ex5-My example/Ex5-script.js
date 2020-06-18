var number = window.document.querySelector('input#idnumbers')
var avetor = []
var selecteds = window.document.querySelector('select#idselect')
var vResposta = window.document.querySelector('div#idres')


function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function coletar(){
    vResposta.innerHTML = ``
    if(number.value.length == 0 || number.value == 0 || number.value < 1 ||number.value > 100){
        window.alert(`Valor inválido ou não adicionado...`)
    }else{
        /*                                                                Seria outra forma de fazer sem precisar declarar outra função     Mas ele deve ter escolhido a outra pela didática                  Ou por conta do JS ser uma linguagem funcional                    Ou por algum motivo que escapa de minha compreeensão de iniciante ,

        if(!(avetor.indexOf(Number(number.value)) != -1) == true){
            window.alert(`Tudo OK!`)
        }else{
            window.alert(`Não tá tudo OK!`)
        }
        */

        let d = number
        if(!inLista(d.value, avetor) == true){
            let sentence = document.createElement('option')
            sentence.text = `${number.value}`
            var n = 1
            n++
            sentence.value = `selecteds${n}`
            selecteds.appendChild(sentence)
            avetor.push(Number(number.value))
        }else{
            window.alert(`Este valor já foi adicionado, escolha outro.`)
        }
        number.value = ``    
        number.focus()
    }
}
function resposta(){
    var bigNumber = 0, smallNumber = 101, somaNumbers = 0, mediaNumbers =0
    
    //vResposta.innerHTML = `sdfgdsfggfdsfg ${avetor[2]}` 
    vResposta.innerHTML = `O total de números selecionados são ${avetor.length}. <br/>`
    
    for(let c1 in avetor){
        if(bigNumber < avetor[c1]){
            bigNumber = avetor[c1]
        }   
        if(smallNumber > avetor[c1]){
            smallNumber = avetor[c1]
        } 
        somaNumbers += (avetor[c1])
    }
    mediaNumbers = somaNumbers / avetor.length

    vResposta.innerHTML += `O maior número escolhido é ${bigNumber}. <br/>`
    vResposta.innerHTML += `O menor número escolhido é ${smallNumber}. <br/>`
    vResposta.innerHTML += `A soma dos valores é ${somaNumbers}. <br/>`
    vResposta.innerHTML += `A média dos valores é ${mediaNumbers} . <br/>`
}