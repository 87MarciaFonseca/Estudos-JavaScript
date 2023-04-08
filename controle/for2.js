const notas = [6.7,7.4,9.8,8.1,7.7] // caso ele vai percorrer pelos os inídices e não valores

for(let i in notas){ // interessante usar 'lete' para amarrar os blocos no laço
    console.log(i,notas[i]) //ele acessa primeiro o índice e depois o array
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){ // atrinuto de um objeto
    console.log(`${atributo} = ${pessoa[atributo]}`)// percorrer atrib. em objtos
}