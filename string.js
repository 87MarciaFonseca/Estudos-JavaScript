const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // código relacionado a tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3)) //selecionar variaveis de uma string

console.log('Escola '.concat(escola).concat("!")) // concatenar variavies

console.log('Escola ' + (escola) +("!")) // outra forma de concatenar
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\w/g,'e')) //REgex para subst. de variável
console.log('Ana,Maria,Pedro'.split(',')) //Away é um agrupador de variaveis