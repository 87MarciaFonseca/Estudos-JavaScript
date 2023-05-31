const nums = [1,2,3,4,5]

// For com propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10 // função arrow,tem retrnar algo 
const triplo = e => e * 3 // retorno triplo
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //faz transformação do resultado em dinheiro(r$ /real) é uma templeString

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)// resultado transformado três vezes
console.log(resultado)
