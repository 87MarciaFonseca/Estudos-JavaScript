// pessoa -> 123 {...}
const pessoa ={ nome:'João'} // só pode atribuir a uma constante apenas uma vez
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: ' Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = "Rua ABC" // não pode mudar object
delete pessoa.nome // não pode deletar object

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: ' João'})
pesssoaConstante.nome = ' Maria'
console.log(pessoaConstante) // dessa forma não pode ser mudado nem a const e nem object
