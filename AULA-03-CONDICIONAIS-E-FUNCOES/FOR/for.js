const filmes = [
    'thor', 'Rogue One', 'Logan', 'Vingadores', 'Star Wars', 'Batman', 'Deadpool'
];

for (let index = 0; index < filmes.length; index++) {
    console.log(filmes[index]);   
}

for (const filme of filmes) {
    console.log(filme);
}