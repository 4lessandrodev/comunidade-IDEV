
console.log(); //#1
console.table(); //#2
console.info(); //#3
console.error(); //#4
console.count(); //#5
console.warn(); //#6
console.debug(); //#7

var numero = 123;
var numeroB = Number(10);
var texto = "um texto qualquer";
var textoB = String("Hello World");
var textoC = "1990";
var dataAtual = new Date();
var linkTexto = 'https://google.com';
var real = 120.90;
var boleano = true;
var boleanoB = Boolean(0);
var nulo = null;
var vazio = '';
var indefinido;
var object = {};
var objectB = new Object({});

var User = { name: 'username', age: 18 };
var array = [];
var arrayB = new Array(10);
var frutas = ['pera', 'uva', 'abacate', 'maça'];



//Conversões 
object.email = 'username@domain.com';
var quantidade = frutas.length;
var caracteres = texto.length;
var textoEmNumero = parseFloat(textoC);
var textoEmNumeroB = parseInt(textoC);

var dia = dataAtual.getDate();
var mes = dataAtual.getMonth();
var ano = dataAtual.getFullYear();

//Explicar tamplete string 

textoB = textoB.toLowerCase();
texto = texto.toUpperCase();

