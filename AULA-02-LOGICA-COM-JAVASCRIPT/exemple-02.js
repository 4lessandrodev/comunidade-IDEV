let a = 10;
let b = 55;

let adicao = a + b;
let multiplicacao = a * b;
let divisao = a / b;
let subtracao = b - a;

//Parentese > multiplicacao > divisao > adicao > subtracao 

let resultadoA = a + b / b - a * a * b + b / b;
let resultadoB = adicao / subtracao * multiplicacao + divisao;
let resultadoC = ((adicao / subtracao) * divisao ) + multiplicacao;
console.table({ "A: ": resultadoA, "B: ": resultadoB, "C: ": resultadoC });

let indice = 0;
console.log(`Indice: ${indice}`);
indice++;
console.log(`Indice: ${indice}`);
indice++;
console.log(`Indice: ${indice}`);
indice++;
console.log(`Indice: ${indice}`);
indice++;
console.log(`Indice: ${indice}`);
indice++;
console.log(`Indice: ${indice}`);
indice++;
console.log(`Indice: ${indice}`);

var fator = 9;
var indices = 0;
console.log(`${indices} x ${fator} = ${indices * fator}`);
indices++;
console.log(`${indices} x ${fator} = ${indices * fator}`);
indices++;
console.log(`${indices} x ${fator} = ${indices * fator}`);
indices++;
console.log(`${indices} x ${fator} = ${indices * fator}`);
indices++;
console.log(`${indices} x ${fator} = ${indices * fator}`);
