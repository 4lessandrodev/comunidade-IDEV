const Smartphone = require('./Smartphone');


function salvarCeluar(marca, modelo, reso, tam) {
    let celularA = new Smartphone();
    
    celularA.marca = marca;
    celularA.modelo = modelo;
    celularA.resolucaoCamera = reso;
    celularA.tamanhoTela = tam;
    
    Smartphone.salvar(celularA);
 
}


salvarCeluar("Nokia", "1100", 5, 7);