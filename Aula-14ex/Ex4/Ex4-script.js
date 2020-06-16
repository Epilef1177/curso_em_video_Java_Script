function gerarTabuada(){
    let vNumber = document.querySelector('input#idnumber').value
    let vRes = document.getElementById('idtab')
    if(vNumber.length == 0){
        window.alert(`Escolha um número`)
    }else{
        vRes.innerHTML = ''
        for(var n = 0; n <=10; n++){
            //vRes.innerHTML += `${vNumber} x ${n} = ${vNumber*n} <br/>`
            let item = document.createElement('option')
            item.text = `${vNumber} x ${n} = ${vNumber*n}`
            item.value = `tab${n}`
            vRes.appendChild(item)
        }
    }
}