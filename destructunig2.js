const [a ] = [10]
console.log(a)

const [n1,  ,n3, ,n5,n6 = 0] = [10, 7,9 ,8]
console.log(n1, n3,n5,n6) // destrituração  de multielementos,usado uma única atribuição

const [,[, nota]] = [[,8,8],[9,6,8]] // método que não utilizado por difícil leitura
console.log(nota) // esse tipo de destructuring com array é forma mais rápida
