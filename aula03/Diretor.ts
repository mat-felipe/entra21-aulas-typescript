import { Professor } from "./Professor.js"

export class Diretor extends Professor {

    public nome: string
    public idade: number
    public cidade: string
    public professor: Array<string>

    constructor(nome: string, idade: number, cidade: string, professor: Array<string>) {
        super(nome,idade,cidade)
        this.professor = professor
    }

    apresentar(): string {
        return ``
    }

    relDesempenho(): Array<number> {
        return
    }
}