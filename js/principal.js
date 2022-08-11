let nome = "Mateus";
let idade = 29;
console.log(nome, idade);
$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo("body");
