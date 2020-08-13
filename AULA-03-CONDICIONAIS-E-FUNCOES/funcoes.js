
function name(params) {
    //Codigo de execução 
    //Retorno (opcional)
}

function somar() {
    console.log(10 + 20);
}

function somarParametros(a, b) {
    console.log(a + b);
}

function somarParametrosRetornarResultado(a, b) {
    return a + b;
}

function somarValoresOpcionais(a=0, b=0) {
    return a + b;
}

function funcaoConstrutora(titulo, autor) {
    return { titulo, autor };
}

function funcaoRecebeVariosArgumentos(...arguments) {
    let total = 0;
    for (let valor of arguments) {
        total += valor;
    }
    return total;
}