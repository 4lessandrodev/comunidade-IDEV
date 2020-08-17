const NotFound = Symbol(404);

function encontrarIndicePorId(id, array) {
    let indice = array.findIndex((linha) => linha.id === id);
    return (indice === -1) ? NotFound : indice;
}

const students = [
    {
        id: 1,
        nome: 'LUAN',
        genero: 'M',
        data_nascimento: '03/06/2000',
        turma: '7A',
        curso:'1 SERIE'
    },
    {
        id: 2,
        nome: 'LETICIA',
        genero: 'F',
        data_nascimento: '06/07/1995',
        turma: '5A',
        curso:'3 SERIE'
    },
];