const nums = [1,2.,3,4,5,6,7,8,9,10]

for (x in nums){// esse bloco é mais associado ao break ou seja ele consegue desviar
    if(  x == 5){ // esse para fácil de usar do que modo 'externo'
        break // só age nos tipos for,while e switch., ele sai fora do laço corrente
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5) {
        continue//só age em for e while, interroper a repetição atual e vai para próxima
    }
    console.log(`${y} = ${nums[y]}`)
    }

    externo: 
    for (a in nums){
        for(b in nums){
          if (a == 2 && b == 3)  break externo
          console.log(`Par = ${a} ,${b}`)
        }

    } // não use esse código,é só um exemplo para usar break da forma antiga da linguagem js

    