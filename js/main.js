function clicou(){
   document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar</i>";
   // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
   // window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse aqui";
    elemento.innerHTML = "Passar o mouse aqui";

}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento);{
console.log(elemento.value)
}
/*
function soma(n1, n2){
 return n1 + n2;

}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
        return validar;
 }

 var idade = prompt("Qual sua idade");
 console.log(validaIdade(idade));
 

alert(soma(5, 10));


/*
var d = new Date();
alert(d.getMonth());
<<<<<<< HEAD
lert(d.getHours());
*/
=======
alert(d.getHours());

>>>>>>> bb9d30006b5a815712a956c7cd9f05b2d5177202


/*
LAÇO REPETIÇÃO
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/

/* ESTRUTURA DE REPETIÇÃO
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/


/*var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*
DICIONARIO
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

/*
var lista = ["maça", "pêra", "limão"];
lista.push("uva");
//lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));




/*var nome = "Elaine Calasans";
//var n1 = 30;
//var n2 = 10;
//var frase = "Karatê é um excelente esporte";
//alert("Bem vindo " + " tem " + idade + " anos ");
//alert(idade + idade2);

console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Brasil", "Eu"));
*/
