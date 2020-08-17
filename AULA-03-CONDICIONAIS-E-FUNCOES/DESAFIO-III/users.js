//Variáveis de identificação de erros 
const NotFound = Symbol(404);



//------------------------------------------------------------------------------------
//Encontrar o índice de um usuário no array 
const encontrarIndicePorId = (id) => {
    let indice = users.findIndex((linha) => linha.id === id);
    return (indice === -1) ? NotFound : indice;
};



//------------------------------------------------------------------------------------
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



//------------------------------------------------------------------------------------
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



//------------------------------------------------------------------------------------
//Salvar um novo usuário 
const create = (user) => {
    users.push(user);
};



//------------------------------------------------------------------------------------
//Processo para salvar um novo usuário
const validateAndSaveUser = (email, password, admin = false) => {
    const user = User(email, password, admin);
    if (user.error) {
        return console.log(user.error);
    }
    create(user);
};



//------------------------------------------------------------------------------------
//Listar usuários 
const index = () => {
    console.table(users);
};



//------------------------------------------------------------------------------------
//Buscar usuário pelo id
const findByPk = (id) => {
    if (isNaN(id)) {
        return 'Informe um id numérico';
    }
    const user = users.find(user => user.id === id);
    return user;
};


//------------------------------------------------------------------------------------
//Buscar usuário pelo nome
const findOne = (email = '') => {
    if (typeof email !== 'string' || email.length < 1) {
        return 'Informe um nome em string';
    }
    email = email.toUpperCase();
    const user = users.find(user => user.email === email);
    return user;
};



//------------------------------------------------------------------------------------
//Atualizar um usuário 
const update = (id, email = '', password='') => {
    const indice = encontrarIndicePorId(id);
    if (indice === NotFound) {
        return 'Não foi encontrado o usuário informado';
    }

    if (email === '' || password === '') {
        return 'Informe email e senha';
    }
    email = email.toUpperCase();

    users[indice] = {
        ...users[indice], email, password 
    };
};





//------------------------------------------------------------------------------------
//Excluir um usuário
const destroy = (id) => {
    if (isNaN(id)) {
        return 'Informe um id numérico'; 
    }
    const indice = encontrarIndicePorId(id);
    if (indice === NotFound) {
        return 'Não foi encontrado o usuário para o id';
    }
    users.splice(indice, 1);
    return 'Usuário removido';
};




//------------------------------------------------------------------------------------
//Atualizar um usuário 
const login = (email = '', password = '') => {
    if (email === '') {
        return 'Informe um email';
    } else if (password === '') {
        return 'Informe uma senha';
    }
    email = email.toUpperCase();
    const user = users.find((user) => user.email === email);

    if (!user) {
        return 'Usuário ou senha inválida';
    }

    if (user.password !== password) {
        return 'Usuário ou senha inválida';
    }

    return 'Usuário conectado';
};



//------------------------------------------------------------------------------------
//Testando o método login
console.log(login('LUcas@gmail.com', 'ASD123')); //Usuário conectado


//Testando o método salvar
index();
validateAndSaveUser('ALINE@gmail.com', '123');
index();


//Testando o método atualizar 
index();
update(1, "joao@mail.com", '123');
index();


//Testando a função buscar usuário por id 
console.table(findByPk(1));


//Testando encontrar um usuário pelo nome 
console.table(findOne('DAIANA@GMAIL.COM'));



//Testando remover um usuário
index(); 
console.table(destroy(2));
index();