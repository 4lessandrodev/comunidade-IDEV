class Carro{

    public marca: string;
    public ano: number;

    constructor(marca: string, ano: number){
        this.marca = marca;
        this.ano = ano;
    }

    public andar(){
        console.log("O carro começou a andar");
    }

    public bozinar(){
        console.log("O carro buzinou");
    }

    public static create(carro: object){
        console.log("Salvo com sucesso");
    } 
}

const gol = new Carro('G10', 2020);

gol.andar();
gol.bozinar();

Carro.create(gol);