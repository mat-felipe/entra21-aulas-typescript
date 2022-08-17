import { Aluno } from "./Aluno.js";
import { Animal } from "./Animal.js";
import { Professor } from "./Professor.js";

console.log("Aula dois funcionou");

let animal1: Animal = new Animal("Roedor", "Rato", 0.5, ["Terra", "Lixo", "Comida"])

console.log(animal1);

console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

animal1.nome = "Hamster"
animal1.peso = 1
animal1.habitat[0] = "Jardim"
animal1.setEspecie = "Alface"

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

let animal2: Animal = new Animal("Mamífero", "Baleia", 5000000, ["Água"])

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

animal2.nome = "Jubarte"
animal2.peso = 4562312146251
animal2.habitat[0] = "Mar"
animal2.setEspecie = "Equino"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[0]);
console.log(animal2.getEspecie);

let animal3: Animal = new Animal("Humano", "Mateus Felipe", 75, ["Água", "Terra", "Fogo", "Ar"])

console.log(animal3);
console.log(animal3.nome);
console.log(animal3.peso);
console.log(animal3.habitat);
console.log(animal3.getEspecie);

animal3.nome = "Goettems"
animal3.peso = 80
animal3.habitat[0] = "Mar"
animal3.setEspecie = "Masculino"

console.log(animal3);
console.log(animal3.nome);
console.log(animal3.peso);
console.log(animal3.habitat);
console.log(animal3.getEspecie);

let mateus: Aluno = new Aluno("Mateus Felipe", 29, [10,10,10])

console.log(mateus);

console.log(mateus.nome);
console.log(mateus.idade);
console.log(mateus.calcularMedia());
console.log(mateus.apresentar());

let fulano: Aluno = new Aluno("Fulano da Silva", 56, [5,6,7,8])

console.log(fulano);

console.log(fulano.nome);
console.log(fulano.idade);
console.log(fulano.calcularMedia());
console.log(fulano.apresentar());

fulano.nome="Ciclano"
fulano.idade=87
fulano.setNotas=[5,5,5]

console.log(fulano.nome);
console.log(fulano.idade);
console.log(fulano.calcularMedia());
console.log(fulano.apresentar());


let professor: Professor = new Professor("Rubem Oliota", 31, ["Algoritmo", "Java", "Typescript"], 80, 180)

console.log(professor);
console.log(professor.apresentar());
console.log(professor.calcularRendimento());













