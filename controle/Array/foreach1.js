const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice){ //forEach para percorrer pelo indice é elemento a 'const aprovados'
    console.log(`${indice +1} ${nome}`)
    
})

aprovados.forEach(nome => console.log(nome)) // a mesma coisa sem o indice

const exibirAprovados = aprovado => console.log(aprovados)
aprovados.forEach(exibirAprovados)