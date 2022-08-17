export class Professor {
    public nome: string
    public idade: number
    public diciplinas: Array<string>
    public valorHora: number
    public quantidadeHora: number

    constructor(nome: string, idade: number, diciplinas: Array<string>, valorHora: number, quantidadeHora: number) {
        this.nome = nome
        this.idade = idade
        this.diciplinas = diciplinas
        this.valorHora = valorHora
        this.quantidadeHora = quantidadeHora
    }

    public apresentar(): string {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade}, atualmente estou ensinando ${this.diciplinas.length} disciplinas com uma quantidade de ${this.quantidadeHora} no valor de ${this.valorHora}`
    }

    public calcularRendimento(): number{
        return this.valorHora*this.quantidadeHora;
    }


}

