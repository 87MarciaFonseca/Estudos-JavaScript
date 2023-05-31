const quaseArray = {0: 'Rafael',1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{ // toString serve p/ simular um array
    value: function() { return Object.values(this)}, //funcão que retorna os valoes do obj
    enumerable: false // não enumerada
})

console.log(quaseArray[0]) // conchetes são os identificadores

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) // a mesma forma de apresentar um array