const ferrari = { // objeto
    modelo: ' F40',
    velMax: 324
}

const volvo = {
    modelo: ' V40',
    velMax: 200

}

console.log(ferrari.__proto__) // usando '__proto__' eu acesso uma cadeia de protótipo.pai
console.log(ferrari.__proto__ === Object.prototype) // apontam para mesmo object.prototype,acesso um atib.do objeto
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //aponta p/ object.prototype é null


function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype , MeuObjeto.prototype)


