function Pessoa() { // contexto léxico
    this.idade = 0

    setInterval(() => { //a função arrow não deixa a função fica variando
        this.idade++ // this incrementa a função pessoa
        console.log(this.idade)

    }, 1000)
}

new Pessoa