let contador = 1 // controla o laço
while(contador <= 10){ // expressão se vai continuar ou não a rodar o contador
    console.log(`contador = ${contador}`) // contador a partir de  while
    contador++ // incremento
}

for(let i = 1; i <= 10; i++){ // contador com mesma lógica de while em for,só que em uma única linha
    console.log(`i = ${i}`)
}

const notas = [6.7,7.4,9.8,8.1,7.7] // contador em array,mesma lógica dos dois acima ,só usa uma array para navagar do primeiro até ultimo elemento
for(let i = 0; i< notas.length; i++){ //notas. 'length' é o tamanho do array ate seu final e 'let' e usado manter o formato do bloco
     console.log(`nota = ${notas[j]}`)
}

//console.log(i) // sem usar o let ,dá espaço para usar essa configuração,que passa do laço acima