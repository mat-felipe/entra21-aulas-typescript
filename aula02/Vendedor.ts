export class Vendedor {
    public nome: string
    public idade: number
    public comissao: number
    public vendasRealizadas: number

    constructor(nome: string, idade: number, comissao: number, vendasRealizadas: number) {
        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizadas = vendasRealizadas
    }

    public apresentar(): string {
        return `Meu nome é ${this.nome} com ${this.idade} e vendi ${this.vendasRealizadas} com uma comissao de ${this.comissao}`
    }

    public calcularRendimento(){
        
    }

}