//Exemplo

function somar() {
    console.log(10 + 20);
}

function somarDois(num1, num2, abacaxi) {
    console.log(num1 + num2 + abacaxi);
}

function somarVarios(...arguments) {
    console.log(arguments);
}

function multiplicar(a=0, b=0) {
    return a + b;
}

console.log(multiplicar(7));





function tabuada(fator, operador, outroNumero){
    let result = 0;
    switch (operador) {
        case '*':
        result = fator * outroNumero;
        break;
        case '+':
        result = fator + outroNumero;
        break;
        case '/':
        result = fator / outroNumero;
        break;
        case '-':
        result = fator - outroNumero;
        break;
        default:
        result = 0;
        break;
    }
    return result;
}
