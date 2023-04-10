function area(largura,altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else{
         return area
    }
}

//embora a linguagem seja flexível ,os paramentos devem ser analizados antes do uso

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,17,22,44))
console.log(area(5,5))// retornou um erro ,tem tomar cuidado na hora usar parametros
