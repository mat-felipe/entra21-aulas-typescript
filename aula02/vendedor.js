export class Vendedor {
    constructor(nome, idade, comissao, vendasRealizadas) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
    }
    apresentar() {
        return `Meu nome é ${this.nome} com ${this.idade} e vendi ${this.vendasRealizadas} com uma comissao de ${this.comissao}`;
    }
    calcularRendimento() {
    }
}
