const carrinho = [
    '{"nome": "Borracha","preco": 3.45}', //JSON É COM "",NÃO ESQUECE
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços- Aplicação mais otimizada
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
const result = carrinho.map(itemCarrinho => paraDinheiro(JSON.parse(itemCarrinho).preco))

console.log(result)

//Forma ensinada pelo professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
