// Função em JS  é first-Class Object (Citizens)
// higher -order function - função de alta ordem

//criar de forma literal- recebe paramentros e pode retornar um valor é opcional
function fun1(){} // inclui paramêntros e corpo que são os blocos e eles são obrigarios nesse caso

//armazenar em uma varável
const fun2 = function () {} //função anônima e atribui a uma constante

// Armazenar em um array
const array = [function (a,b) { return a + b}, fun1 , fun2]
console.log(array[0] (2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como paramentros
function run(fun){
    fun()
}

run(function () {console.log(' Executando...')})

// Uma função pode retornar /conter uma função
function soma(a,b){
    return function (c){
        console.log(a +b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)