var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
if(hora > 23.59){
    console.log('Desculpe, mas este formato de horário não existe.')
}else{
    console.log(`Agora são exatamente ${hora}:${minutos} horas.`)
}

if(hora > 23.59){
    console.log('Horário inválido...')
}else if(hora < 6){
    console.log('Boa Madrugada!!!')
}else if(hora < 12){
    console.log('Bom Dia!!!')
}else if(hora < 18){
    console.log('Boa Tarde!!!')
}else if(hora < 24.59){
    console.log('Boa Noite!!!')
}