let nome:string="Mateus"
let idade:number=29

console.log(nome,idade);

$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo("body")