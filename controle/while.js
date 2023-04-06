function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){ // while é uma estrutura de repetição,baseado em verdadeiro e ,própri para executar laços que estruturas de repetições
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcão escolhida foi ${opcao}. `)
}

console.log('Atá a próxima!')