let valores = [8,1,7,4,2,9]
valores.sort()
console.log(valores)
for(let n = 0; n < valores.length; n++){
    console.log(`Vetor 'valores', casa ${n}, valor ${valores[n]}.`)
}
console.log(valores)
for(let n in valores){
    console.log(`C: ${n} | V: ${valores[n]}`)
}
/*
ISSO NÃO!!!

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/