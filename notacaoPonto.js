console.log(Math.ceil(6.1))

const objt1 = {}
objt1.nome = 'Bola' // anotaçõa ponto '.'
 //objt1['nome'] = 'BoLa2' // opção é a mesma ,muda pode acessar por uma[]
console.log(objt1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)


