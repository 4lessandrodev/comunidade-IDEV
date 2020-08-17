const stud = require('./students');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});

rl.prompt();
rl.setMaxListeners(120);

function exibirOpcoes() {
    console.table([
        { Comando: 'IND', Acao: 'Listar' },
        { Comando: 'FIN', Acao: 'Buscar' },
        { Comando: 'CRE', Acao: 'Criar' },
        { Comando: 'DEL', Acao: 'Excluir' },
        { Comando: 'UPD', Acao: 'Alterar' },
        { Comando: 'QUI', Acao: 'Sair' }
    ]);
    console.log('Escolha uma opção:');
}

rl.on('line', (res) => {
    switch (res) {
        case 'IND':
        stud.index();
        exibirOpcoes();
        break;
        case 'FIN':
        rl.question('Informe qual é o ID do usuário: ', (id) => {
            console.log();
            id = parseInt(id);
            console.table(stud.findByPk(id));
            exibirOpcoes();
        });
        break;
        case 'CRE':
        console.log('Criando...');
        rl.question('Informe o nome do usuário: ', (name) => {
            rl.question('Informe o gênero: ', (gender) => {
                rl.question('Informe a turma: ', (class_) => {
                    rl.question('Informe o curso: ', (course) => {
                        rl.question('Informe a data de nascimento: ', (born_date) => {
                            stud.generateAndSaveStudent(name, gender, class_, course, born_date);
                            console.log('Usuário criado com sucesso!!!');
                            exibirOpcoes();
                        });
                    });
                });
            });
        });
        break;
        case 'DEL':
        rl.question('Informe qual é o ID do usuário: ', (id) => {
            console.log();
            id = parseInt(id);
            console.log(stud.destroy(id));
            exibirOpcoes();
        });
        break;
        case 'UPD':
        console.log('Alterando...');
        rl.question('Informe qual o id do usuário que voce pretente atualizar: ', (id)=>{
            rl.question('Informe o nome do usuário: ', (name) => {
                rl.question('Informe o gênero: ', (gender) => {
                    rl.question('Informe a turma: ', (class_) => {
                        rl.question('Informe o curso: ', (course) => {
                            rl.question('Informe a data de nascimento: ', (born_date) => {
                                id = parseInt(id);
                                stud.update(id, name, gender, class_, course, born_date);
                                console.log('Usuário criado com sucesso!!!');
                                exibirOpcoes();
                            });
                        });
                    });
                });
            });
        });
        break;
        case 'QUI':
        rl.close();
        break;
        
        default:
        console.log('Escolha uma opção válida');
        break;
    }
});


exibirOpcoes();
