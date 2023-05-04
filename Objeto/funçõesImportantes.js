const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13

}

console.log(Object.keys(pessoa))// objetos e chaves
console.log(Object.values(pessoa)) // objeto e valores
console.log(Object.entries(pessoa)) //entries e registos, array com dois elementos chave e valor

Object.entries(pessoa).forEach(([chave,valor]) => {// forEach para percorrer os array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa , 'dataNascimento' , {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})