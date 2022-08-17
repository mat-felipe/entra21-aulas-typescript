export class Aluno {
    public nome: string
    public idade: number
    private notas: Array<number>

    constructor(nome: string, idade: number, notas: Array<number>) {
        this.nome = nome
        this.idade = idade
        this.notas = notas
    }

     //metodos
     public get getNotas(): Array<number> {
        return this.notas
    }

    public set setNotas(notas: Array<number>) {
        this.notas = notas;
    }

    public apresentar(): string {

        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos`
    }

    public calcularMedia(): number {
        let soma: number = 0
        this.notas.forEach(nota => {
            soma+=nota
        });
        return soma/this.notas.length

        //este linha faz a media em um código menor
        // return this.notas.reduce((anterior,posterior)=>anterior+posterior,0)/this.notas.length
    }


}