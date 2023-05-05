const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13

}

console.log(Object.keys(pessoa))// objetos e chaves
console.log(Object.values(pessoa)) // objeto e valores
console.log(Object.entries(pessoa)) //entries e registos, array com dois elementos chave e valor

Object.entries(pessoa).forEach(([chave,valor]) => {// forEach para percorrer os array e usando desctruig
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa , 'dataNascimento' , { // definir uma propriedade um objeto
    enumerable: true, // vai está listada ou inumerada
    writable: false, //  não pode ser modificada
    value: '01/01/2019' // correto ser imprimido
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMASScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3,a: 4}
const obj = Object.assign(dest, o1,o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

