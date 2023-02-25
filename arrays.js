const valores = [7.7, 8.9 , 6.3, 9.2] //array é heterogênica e dinâmica
console.log(valores[0],valores[3])
console.log(valores[4])// iten não existe iria print'undefined'

valores[4] = 10 //alterar ou adiconar valores
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false,null,'teste')//mistura as arrays
console.log(valores)

console.log(valores.pop()) // retira uma variavel do array,por ex:'teste'
delete valores[0] // deletar um elemento,funcionar no contexto object
console.log(valores)

console.log(typeof valores) // tipo da string