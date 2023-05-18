class Lancamento{
    constructor(nome = 'Genérico',valor = 0){
        this.nome = nome
        this.valor = valor
    }
}


class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lacamento = []
    }
}

addLancamentos(...lancamentos){
    lancamneto.forEach(l => this.Lancamnetos.push(l))
}

sumario(){
    let valorConsolidado = 0
    this.Lancamentos.forEach(l =>{
        valorConsoliado += l.valor
    })
    return valorConsolidado
}

const salario = new Lancamento('salario',45000)
const contaDeLuz = new Lancamentos('Luz', -220)

const contas = new CicloFinanceiros(6,2018)
contas.addLancamentos(salario,contaLuz)
console.log(contas.sumario())


