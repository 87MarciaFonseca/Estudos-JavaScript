let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString())//Erro!

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // eite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco// tira um atributo de um object
console.log(produto)

produto.preco = null // sem preço,definir um preço inválido
console.log(!!produto.preco)
console.log(produto)