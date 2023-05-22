const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()// massa quebrou o carro!,retra um abrit.
console.log(pilotos)

pilotos.push('Verstappen') // push inclui
console.log(pilotos)

pilotos.shift() // tira o primeiro da lista de array
console.log(pilotos)

pilotos.unshift('Hamilton') // colo um atrib. em primeiro
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0, 'Bottas',' Massa') //para adicionar um novo elemento
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa quebrou :(,remover um único elemento

const algunsPilotos1 = pilotos.splice(2)// novo array
console.log(algunsPilotos1)

const algunsPilotos2 =pilotos.slice(1,4)
console.log(algunsPilotos2) // adicionar 