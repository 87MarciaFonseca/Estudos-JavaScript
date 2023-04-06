const imprimirResultado = function (nota){
    switch (Math.floor(nota)){ // switch é uma seleção multipla e não relacional
        case 10:
        case  9:
            console.log('Quadro de Honra')
            break //executar a condição e sair,se não usar ele executa todas as linhas ,sem intervalos
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2 : case 1: case 8:
            console.log('Reprovado')
            break
        default: // pode ser usado não só no final do código,mas tem usar o break
            console.log('Nota inválida')
    }
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)