let totalGeral = 0;
let fatorMultiplicador = 7;
let indice = 0;

totalGeral += fatorMultiplicador * indice;
console.log(`${fatorMultiplicador} + ${indice} : ${fatorMultiplicador + indice}`);
indice++;
totalGeral += fatorMultiplicador * indice;
console.log(`${fatorMultiplicador} + ${indice} : ${fatorMultiplicador + indice}`);
indice++;
totalGeral += fatorMultiplicador * indice;
console.log(`${fatorMultiplicador} + ${indice} : ${fatorMultiplicador + indice}`);
indice++;
//Complete até o 10


let maiorIgual = totalGeral >= 77;
console.log(`maiorIgual: ${totalGeral} >= ${77} : ${maiorIgual}`);


let menorIgual = totalGeral <= 77;
console.log(`menorIgual: ${totalGeral} <= ${77} : ${menorIgual}`);


let maiorIgualOuMenorIgual = totalGeral >= 77 || totalGeral <= 770;
console.log(`maiorIgualOuMenorIgual: ${totalGeral} >= 77 || ${totalGeral} <= 770 : ${maiorIgualOuMenorIgual}`);


let exatamenteIgual = totalGeral === 77;
console.log(`exatamenteIgual: ${totalGeral} === ${77} : ${exatamenteIgual}`);


let diferente = totalGeral != 77;
console.log(`diferente: ${totalGeral} != ${77} : ${diferente}`);


let maiorIgualEMenorIgual = totalGeral >= 77 && totalGeral <= 770;
console.log(`maiorIgualOuMenorIgual: ${totalGeral} >= 77 && ${totalGeral} <= 770 : ${maiorIgualEMenorIgual}`);