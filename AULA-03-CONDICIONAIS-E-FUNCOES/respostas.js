


const operacao = (simbolo, fator) => {
    
    const tabuada = [];
    
    for (let index = 1; index <= 10; index++) {
        
        switch (simbolo) {
            case '*':
            tabuada.push({ index, simbolo, fator, resultado: fator * index });
            break;
            
            case '-':
            tabuada.push({ index, simbolo, fator, resultado: fator - index });
            break;
            
            case '/':
            tabuada.push({ index, simbolo, fator, resultado: fator / index });
            break;
            
            case '+':
            tabuada.push({ index, simbolo, fator, resultado: fator + index });
            break;
            
            default:
            break;
        }
    }

    console.table(tabuada);
    
};