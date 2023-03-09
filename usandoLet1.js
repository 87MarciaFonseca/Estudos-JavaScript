var numero = 1 // palavra reservada 'var'escopo global e escopo de função
{
    let numero = 2 //palavra reservada 'let'em escopo de bloco,global e escopo de função
    console.log('dentro =', numero) // let está em bloco'{}'
}
console.log('fora =', numero)