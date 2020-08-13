const filmes = [
    'thor', 'Rogue One', 'Logan', 'Vingadores', 'Star Wars', 'Batman', 'Deadpool'
];

const livros = [
    {
        id:1,
        title: 'Orgulho e Preconceito',
        author: 'Jane Austen'
    },
    {
        id:2,
        title: '1984',
        author: 'George Orwell'
    },
    {
        id:3,
        title: 'Dom Quixote de la Mancha',
        author: 'Miguel de Cervantes'
    },
    {
        id:4,
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-Exupéry'
    },
    {
        id:5,
        title: 'Dom Casmurro',
        author: 'Machado de Assis'
    },
    {
        id:6,
        title: 'O Bandolim do Capitão Corelli',
        author: 'Louis de Bernières'
    },
    {
        id:7,
        title: 'O Conde de Monte Cristo',
        author: 'Alexandre Dumas'
    },
    
];

let livro1 = {
    id:8,
    title: 'Hamlet',
    author: 'William Shakespeare'
};

let livro2 = {
    id:9,
    title: 'Odisseia',
    author: 'Homero'
};

//Gera um novo objeto com os parãmetros 
function generateBook(title, author) {
    return { id: livros.length + 1, title, author };
}

//Adiciona um elemento ao fim da lista 
livros.push(generateBook('Hamlet', 'William Shakespeare'));
console.table(livros);

//Remove um elemento do fim da lista 
livros.pop();
console.table(livros);

//Adiciona um elemento no início da lista 
livros.unshift(generateBook('Hamlet', 'William Shakespeare'));

//Remove um elemento no início da lista 
livros.shift();

//Encontra o indice de um elemento na lista 
let indice = filmes.indexOf('Vingadores');

//Remove um elemento da lista: Recebe por parâmetro
//o indice e a quantidade de item a ser excluido
let itemRemovido = filmes.splice(indice, 1);

//Encontrar um elemento na lista 
let filmeEncontrado = filmes.find(filme => filme == "Deadpool");

//Filtrar um filme pelo nome; obs: O retorno será um array
let filmesFiltrados = filmes.filter(filme => filme == "Deadpool");

//Encontrar o tamanho de um array
let tamanho = filmes.length;

//Passar por cada elemento de um array e executar uma ação
filmes.forEach(filme => console.log(filme));