 const nome = 'Rebeca'
 const concatenacao = ' Óla ' + nome + '!'
 const template = `
 Óla 
 ${nome}!`// interpolação
 console.log(concatenacao,template)

 // expresssoes
 console.log(`1 + 1 = ${1 +1 }`)

 const up = texto => texto.toUpperCase()
 console.log( `Ei...${up(`cuidado`)} !`)