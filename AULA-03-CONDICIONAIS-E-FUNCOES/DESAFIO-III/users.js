//Variáveis de identificação de erros 
const NotFound = Symbol(404);


//Encontrar o índice de um usuário no array 
const encontrarIndicePorId = (id, array) => {
    let indice = array.findIndex((linha) => linha.id === id);
    return (indice === -1) ? NotFound : indice;
};




//Lista de usuários 
const users = [
    {
        id:1,
        email: 'LUCAS@GMAIL.COM',
        password: 'ASD123',
        admin:false
    },
    {
        id:2,
        email: 'DAIANA@GMAIL.COM',
        password: '9875',
        admin:false
    },
    {
        id:3,
        email: 'JOSH@GMAIL.COM',
        password: 'ABC123',
        admin:true
    }
];




//Construtor de um novo usuário e validação de campos
const User = (email, password, admin = false) => {
    if (typeof email !== 'string' || !email.includes('@')) {
        return {
            error:'Informe um email válido'
        };
    } else if (typeof password !== 'string') {
        return {
            error:'Senha deve ser String'
        };
    } else if (password.trim() === '') {
        return {
            error:'Informe uma senha'
        };
    }
    return {
        id: users[users.length - 1].id + 1,
        email:email.toUpperCase(),
        password:password,
        admin
    };
};




//Salvar um novo usuário 
const create = (user) => {
    users.push(user);
};




//Processo para salvar um novo usuário
const validateAndSaveUser = (email, password, admin = false) => {
    const user = User(email, password, admin);
    if (user.error) {
        return console.log(user.error);
    }
    create(user);
};




//Listar usuários 
const index = () => {
    console.table(users);
};



//Testando o método salvar
index();
validateAndSaveUser('ALINE@gmail.com', '123');
index();



