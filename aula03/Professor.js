import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    apresentar() {
        return ``;
    }
    gerarBoletins() {
        return;
    }
}
