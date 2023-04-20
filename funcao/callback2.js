const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//Sem usar o callback- Método n~so funcional
const notasBaixas1 = []
for (let i in notas){
     if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com o callback- Filter,serve para filtrar os elementos dentro do array ,dentro de um critério
const notasBaixas2 = notas.filter(function (nota){// se resposta do filter for true deve ser adicionado,se for false esse elemento não deve ser adicionado no array
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)// nesse exemplo,pode realocar em outros lugais const notaMenorQue7