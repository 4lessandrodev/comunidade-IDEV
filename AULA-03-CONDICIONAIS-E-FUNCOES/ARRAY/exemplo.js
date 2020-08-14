//Exemplo
const filmes = [
    'thor', 'Rogue One', 'Logan', 'Vingadores', 'Star Wars', 'Batman', 'Deadpool',"Logan"
];



// console.table(filmes);
// filmes.push("Titanic");
// console.table(filmes);
// filmes.pop();
// console.table(filmes);
// filmes.unshift("Lagoa azul");
// console.table(filmes);
// filmes.shift();
// console.table(filmes);

// let indice = filmes.indexOf("Vingadores");
// filmes.splice(indice, 1);
// console.table(filmes);

// let filmeEncontrado = filmes.find(function (element, indice, arr) {
//     return element === "Batman";
// });

// // console.log(filmeEncontrado);

// let filmesEncontrados = filmes.filter(function (elem) {
//     return elem === "Logan";
// })

// console.table(filmesEncontrados)


filmes.forEach(function (elem) {
    console.log(elem)
})