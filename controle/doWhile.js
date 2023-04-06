function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opcao = -1 // somente iniciada a variável,sem valor incial!


do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcão escolhida foi ${opcao}.`)
} while (opcao != -1) // Do while a expressão fica depois do bloco

console.log('Até a próxima!') // fazendo isso a estrutura vá rodar pelo menos uma vez