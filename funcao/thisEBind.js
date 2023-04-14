const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
       console.log (this.saudacao)//acessar um atrib.de um obj em 'this'

    }
    
}

pessoa.falar()
const falar = pessoa.falar
falar() //comflito entre paradigmas : funcional e 00,funçaõ orintada a objeto


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()// sempre que vc referência o 'this',se usa bind para aponta





