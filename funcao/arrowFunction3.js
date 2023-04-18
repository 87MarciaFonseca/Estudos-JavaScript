let comparaComThis = function (param){
    console.log(this === param)//this um função arrow é this onde a função foi escrita,não tem variação
}

comparaComThis(global)// tem ter cuidado com escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj) //o this vai apontar para obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)// ele não vai apontar para obj
comparaComThisArrow(obj) // sempre vai apontar para a função foi escrita
comparaComThisArrow(module.exports)