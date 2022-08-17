import { Professor } from "./Professor.js";
export class Diretor extends Professor {
    constructor(nome, idade, cidade, professor) {
        super(nome, idade, cidade);
        this.professor = professor;
    }
    apresentar() {
        return ``;
    }
    relDesempenho() {
        return;
    }
}
