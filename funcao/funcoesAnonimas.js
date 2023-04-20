const soma  = function (x,y){ //função anônima é uma função sem nome
    return x +y// AQUI É A FUNÇÃO SOMA
}
const imprimirResultado = function (a,b ,operacao = soma){
    console.log(operacao(a,b))
}


imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4 ,function (x,y){ //não usou a função soma e sim a função direta feita nesta linha
    return x - y
}) // passa uma função anônima dentro da chamada de outra função

imprimirResultado(3,4,(x,y) => x * y)// arrow fanction,é fato uma função anônima

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar() // acessa a função anônima através do atributo do obj'falar'