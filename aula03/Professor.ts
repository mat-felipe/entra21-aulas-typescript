import { Aluno } from "./Aluno.js";
import { Pessoa } from "./Pessoa.js";


export class Professor extends Pessoa{

public alunos: Array<Aluno>

constructor (nome:string, idade:number, cidade:string, alunos:Array<Aluno>){
    
    super(nome,idade,cidade)
    this.alunos=alunos
}

apresentar(): string {
    return ``
}

gerarBoletins(): Array<number> {
    return
}

}