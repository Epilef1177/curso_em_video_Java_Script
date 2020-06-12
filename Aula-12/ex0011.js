var idade = 18
console.log(`Você tem ${idade} anos.`)


//Forma 'else if', mais compacta.
if(idade < 16){
    console.log('Você não pode votar.')
}else if(idade < 18 || idade > 65){
    console.log('Seu voto é opcional.')
}else{
    console.log('Seu voto é obrigatório!')
}


//Forma clássica de codificar a indentação do if.
/*
if(idade < 16){
    console.log('Você não pode votar!')
}else{
    if(idade < 18 || idade > 65){
        console.log('Seu voto é opcional.')
    }else{
        if(idade >= 18){
            console.log('Seu voto é obrigatório!')
        }
    }
}
*/


//Forma mais redundante e porca de se codificar o algorítimo.
/*
if(idade < 16){
    console.log('Você não pode votar! :( .')
}else{
    if(idade >= 16 && idade < 18 || idade > 65){
        console.log('Seu voto é opcional.')
    }else{
        if(idade > 18 && idade < 66){
            console.log('Seu voto é obrigatório!')
        }
    }
}
*/
