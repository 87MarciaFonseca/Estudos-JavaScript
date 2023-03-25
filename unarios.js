let num1 = 1
let num2 = 2

num1++ // incremento pós fixada  mais número ao variavel num1 
console.log(num1)
--num1 // descremento subtrai um número ao variavel num1 e tem prioridade maior
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 == num2)