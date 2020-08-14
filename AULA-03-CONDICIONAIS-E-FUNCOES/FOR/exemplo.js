//Exemplo


// for (let indice = 1; indice <= 10; indice++){
//     console.log(`7 x ${indice} = ${indice*7}`);
// }

const filmes = [
    'thor', 'Rogue One', 'Logan', 'Vingadores', 'Star Wars', 'Batman', 'Deadpool'
];

// for (let index = 0; index < filmes.length; index++) {
//     console.log(filmes[index]);   
// }

let indice = 0;
for (let filme of filmes) {
    indice++;
    console.log(indice);
    if (filme === "Logan") {
        console.log("Massa demais!!!");
    }
}

console.log("Tamanho do array: " + filmes.length);
