const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome,indice){//os eventos são cada elemento percorrrido no array,ele chama o callback + indice
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)//callback é passa uma função ,esse evento só vai acontecer,quando for chamada
fabricantes.forEach(fabricantes => console.log(fabricantes))

//exemplos: uma requisição ajax é um callback,porque é enviada de sucesso e fracasso, uma chamada é enviada
//ao site para  se achar um lista de clientes se achar é  sucessso ,se tiver erro retorna  fracasso