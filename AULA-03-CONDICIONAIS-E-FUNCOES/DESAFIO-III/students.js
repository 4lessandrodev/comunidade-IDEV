
const NotFound = Symbol(404);

function encontrarIndicePorId(id) {
    let indice = students.findIndex((linha) => linha.id === id);
    return (indice === -1) ? NotFound : indice;
}

const students = [
    {
        id: 1,
        name: 'LUAN',
        gender: 'M',
        born_date: '03/06/2000',
        class_: '7A',
        course:'1 SERIE'
    },
    {
        id: 2,
        name: 'LETICIA',
        gender: 'F',
        born_date: '06/07/1995',
        class_: '5A',
        course:'3 SERIE'
    },
];


//------------------------------------------------------------------------------------
//Construtor de um novo aluno e validar os campos
const Student = (name = '', gender = '', class_ = '', course = '', born_date = '') => {
    if (name === '' || gender === '' || class_  === '' || course  === '' || born_date  === '') {
        return 'Informe todos os campos obrigatórios';
    }
    return {
        id: students[students.length - 1].id + 1,
        name:name.toUpperCase(),
        gender:gender.toUpperCase(),
        class_: class_.toUpperCase(),
        course:course.toUpperCase(),
        born_date,
    };
};




//------------------------------------------------------------------------------------
//Listar os alunos cadastrados 
const index = _ => {
    console.table(students);
};




//------------------------------------------------------------------------------------
//Salvar um novo aluno 
const create = (student) => {
    students.push(student);
};




//------------------------------------------------------------------------------------
//Encontrar um aluno pelo id
const findByPk = id => {
    let student = students.find(student => student.id === id);  
    if (student === NotFound) {
        return 'Aluno não encontrado';
    }
    return student;
};


//------------------------------------------------------------------------------------
//Encontrar um aluno pelo nome
const findOne = name => {
    let student = students.find(student => student.name === name);  
    if (student === NotFound) {
        return 'Aluno não encontrado';
    }
    return student;
};



//------------------------------------------------------------------------------------
//Excluir um aluno
const destroy = id => {
    let index = encontrarIndicePorId(id);
    if (index === NotFound) {
        return 'Usuário não encontrado';
    }
    students.splice(index, 1);
    return 'Aluno excluido';
};




//------------------------------------------------------------------------------------
//Atualizar um aluno 
const update = (id, name = '', gender = '', class_ = '', course = '', born_date = '') => {
    let index = encontrarIndicePorId(id);
    if (index === NotFound) {
        return 'Usuário não encontrado';
    }
    students[index] = {
        ...students[index], name, gender, class_, course, born_date
    };

    return 'Aluno atualizado';
};




//------------------------------------------------------------------------------------
//Processo para salvar um novo aluno
const generateAndSaveStudent = (name = '', gender = '', class_ = '', course = '', born_date = '') => {
    const student = Student(name, gender, class_, course, born_date);
    create(student);
};







// //Testando salvar um novo aluno 
// index();
// generateAndSaveStudent('Alex', 'M', '7S', 'JS', '31/05/1990');
// index();



// //Buscando o aluno 2
// console.table(findByPk(2));


// //Atualizando o aluno 1
// console.table(update(1, name = 'LIMIS', gender = 'F', class_ = '9T', course = 'JAVA', born_date = '30/08/1900'));
// index();



// //Buscar o aluno pelo nome 
// console.table(findOne('LIMIS'));


// //Excluindo o aluno 3
// destroy(3);
// index();




module.exports = {
    NotFound,
    encontrarIndicePorId,
    students,
    Student,
    index,
    create,
    findByPk,
    findOne,
    destroy,
    generateAndSaveStudent,
    update
};