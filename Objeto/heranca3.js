const pai = {nome: 'Pedro', corCabelo: 'preto'} //prototipo origem(pai)

const filha1 = Object.create(pai)// crio novo obj com as mesmas propriedade de pai
filha1.nome = 'Ana'// obj normal,com suas propriedades e henraça só corCabelo
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true} // pode chamar attr.pai e criar novo obj direto
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))// que aparece no keys? rever esse conceito
console.log(Object.keys(filha2))

for(let key in filha2){ // saber ser propriedade veio por herança ou por objeto
    filha2.hasOwnProperty(key) ? // ela tem aquela propriedade ?,se pertence imprimi
      console.log(key): console.log(`Por herança: ${key}`)// templestring
}
