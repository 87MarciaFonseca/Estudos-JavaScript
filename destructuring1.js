// novo recurso do Es2015

const pessoa ={
nome: 'Ana' ,
idade: 5 ,
endereco:{
    logradouro: 'Rua ABC',
    numero:1000
}
}

const { nome, idade }  = pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const { sobrenome , bemHumorada = true} = pessoa
console.log(sobrenome,  bemHumorada)

const { endereco:{logradouro ,numero,cep} } = pessoa
console.log(logradouro ,numero ,cep)// tomar cuidado quando resgatr um atributo alinhado

const { conta: { ag,num}} = pessoa // esse atributo não existe
console.log(ag,num) // senão existir na linha será underfined ou não existir no cód.dará erro na linha
