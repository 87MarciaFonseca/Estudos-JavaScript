const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()// massa quebrou o carro!,retira último elemento.
console.log(pilotos)

pilotos.push('Verstappen') // push inclui novo elemento
console.log(pilotos)

pilotos.shift() // tira o primeiro elemento da lista de array
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca um elemento no inicio do array
console.log(pilotos)// ctrl + n

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0, 'Bottas',' Massa') //para adicionar um novo elemento
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa quebrou :(,remover um único elemento

const algunsPilotos1 = pilotos.splice(2)// novo array
console.log(algunsPilotos1)

const algunsPilotos2 =pilotos.slice(1,4) // pega uma parte do array
console.log(algunsPilotos2) // adicionar 