const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // essa forma serve para colocar nome do object ex: nome: 'Maria'
const obj2 = { a,b,c} // síntaxe mais reduzida  que são os nomes das consts
console.log(obj1 , obj2)

const nomeAttr = ' nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4) // versão mais reduzida de fazer a mesma coisa 

const obj5 = { // forma antiga chave e valor
    funcao1: function(){ // função anomima
  //..
    },
     funcao2(){ // função nova do e2015,tirou a palavra function
        // ...
     }
}

console.log(obj5)