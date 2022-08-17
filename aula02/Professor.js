export class Professor {
    constructor(nome, idade, diciplinas, valorHora, quantidadeHora) {
        this.nome = nome;
        this.idade = idade;
        this.diciplinas = diciplinas;
        this.valorHora = valorHora;
        this.quantidadeHora = quantidadeHora;
    }
    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade}, atualmente estou ensinando ${this.diciplinas.length} disciplinas com uma quantidade de ${this.quantidadeHora} no valor de ${this.valorHora}`;
    }
    calcularRendimento() {
        return this.valorHora * this.quantidadeHora;
    }
}
