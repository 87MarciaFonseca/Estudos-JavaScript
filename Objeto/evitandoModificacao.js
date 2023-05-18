const produto = Object.preventExtensions({
    nome: ' Qualquer', preco: 1.99 , tag: 'promoção'
})
console.log('Extensivel',Object.isExtensible(produto))


produto.nome = ' Borracha '
produto.descricao = ' Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: ' JUliana',idade: 35}
Object.seal(pessoa)
console.log(' delado',Object.isSealead(pessoa))

pessoa.sobrenome = ' Silva'
delete pessoa .nome
pessoa.idade = 29
console.log(pessoa)

//object.freeze = selado + valores constantes