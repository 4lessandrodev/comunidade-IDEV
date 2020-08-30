class Smartphone {
    constructor() {
        this._modelo = String();
        this._marca = String();
        this._tamanhoTela = Number();
        this._resolucaoCamera = Number();
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(valor) {
        if (typeof valor !== 'string') {
            throw new Error("O tipo de valor deve ser string");
        }
        this._modelo = valor;
    }


    get marca() {
        return this._marca;
    }

    set marca(valor) {
        if (typeof valor === 'number') {
            throw new Error("O tipo de valor deve ser string");
        }
        this._marca = valor;
    }

    get resolucaoCamera() {
        return this._resolucaoCamera;
    }

    set resolucaoCamera(valor) {
        if (typeof valor !== 'number') {
            throw new Error("O tipo de valor deve ser numérico");
        }
        this._resolucaoCamera = valor;
    }

    get tamanhoTela() {
        return this._tamanhoTela;
    }

    set tamanhoTela(valor) {
        if (typeof valor !== 'number') {
            throw new Error("O tipo de valor deve ser numérico");
        }
        this._tamanhoTela = valor;
    }

    fazerLigacao(nome) {
        console.log("Ligando para " + nome);
    }

    enviarSMS(nome) {
        console.log("Enviando sms para " + nome);
    }

    tirarFoto() {
        console.log("Tirou uma foto");
    }

    static salvar(celular) {
        console.log("Salvando celular...");
        console.table(celular);
    }

    static editar(celular) {
        // Codigo editar
    }

    static listar(celular) {
        // Codigo listar
    }

    static excluir(celular) {
        // Codigo excluir
    }
}

module.exports = Smartphone;