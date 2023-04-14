class Pessoa {
    constructor() {
        this.idade = 0
        const self = this// criou uma const para acessa ros atributos
        setInterval(function () {
            self.idade++
            console.log(self.idade)
        }/*.bind(this)*/, 1000)// com bind é usada a mesma lógica
    }
}

new Pessoa