export class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    //metodos
    get getNotas() {
        return this.notas;
    }
    set setNotas(notas) {
        this.notas = notas;
    }
    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
    calcularMedia() {
        let soma = 0;
        this.notas.forEach(nota => {
            soma += nota;
        });
        return soma / this.notas.length;
        //este linha faz a media em um código menor
        // return this.notas.reduce((anterior,posterior)=>anterior+posterior,0)/this.notas.length
    }
}
