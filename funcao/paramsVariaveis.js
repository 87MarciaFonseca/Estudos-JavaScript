function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())// nesses exemplos a função funciona bem e parâmetros funcionam
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))

console.log(soma(1.1,2.2,"Teste"))// nesses exemplos tem erros ,formas não aceitas  pela função
console.log('a','b','c')