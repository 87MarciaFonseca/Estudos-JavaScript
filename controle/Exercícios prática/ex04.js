let dividendo = 13 // modelo antigo
let divisor = 5
let resto = dividendo % divisor

console.log(resto)

//  método do professor e mais correto a ser feito

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)