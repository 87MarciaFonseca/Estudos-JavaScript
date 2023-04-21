console.log(soma(3,4))
//function declaration- diferença,que essa função pode ser chamada antes ex:
function soma(x,y){
    return x + y
}// são usadas bastantes em códigos

// function expression- só pode ser chamada depois da declaração
const sub = function (x,y){
    return x - y
}// são usadas bastantes em códigos
console.log(sub(3,4))

// named function expression-só pode ser chamada depois da declaração
const mult = function mult(x,y){
    return x * y
}

console.log(mult(3,4))