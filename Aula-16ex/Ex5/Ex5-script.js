function coletar(){
    let number = window.document.querySelector('input#idnumbers')
    let selecteds = window.document.querySelector('select#idselect')
    let vetorA = []
    
    if(number.value.length == 0 || number.value == 0 || number.value < 1 ||number.value > 100){
        window.alert(`Valor inválido ou não adicionado...`)
    }else{
        for(let n; n <= ){
            let sentence = document.createElement('option')
            sentence.text = `${number.value}`
            sentence.value = `${selecteds}`
        }
    }




}
function resposta(){

}