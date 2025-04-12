 var nome = "";
 var n1 = "";
 var n2 = "";
 var n3 = "";
 var media = "";
 var result = "";
 
 function calc(){
     nome = prompt("Insira seu nome:");
     n1 = parseFloat(prompt("Insira sua primeira nota:"));
     n2 = parseFloat(prompt("Insira sua segunda nota:"));
     n3 = parseFloat(prompt("Insira sua terceira nota:"));

     media = (n1+n2+n3) / 3;

     if (media >= 7){
        result = "Aprovado";
     } else if (media >= 5){
        result = "de Recuperação";
     } else {
        result = "Reprovado";
     }

     return nome + ", sua nota foi " + media.toFixed(1) + ", então você está " + result + ".";
 }
 
 var resultados = [];


 
while (resultados.length <=2) {
    resultados.push(calc());
}

for (var resultado of resultados) {
    console.log(resultado);
}
