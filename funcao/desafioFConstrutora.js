function Pessoa (nome){  // criar objs por class ,função construtora e factory
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa('João')// new é distanciar
p1.falar()

const criarPessoa = nome =>{ // criar objtos pela factory 
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()


