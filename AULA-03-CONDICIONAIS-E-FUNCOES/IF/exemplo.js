// //Exemplo
// let thassia = {
//     nome: 'Thassia',
//     idade: 24,
//     cnh:false
// };

// if (thassia.idade > 18) {
//     console.log("Eh maior de idade");
//     if (thassia.cnh) {
//         console.log("Pode dirigir tambem");
//     } else {
//         console.log("Oops não pode dirigir");
//     }
// } else {
//     console.log("Oops a menina eh nova"); 
// }


// let hora = 13;

// if (hora > 18) {
//     console.log("Eh noite");
// } else if (hora < 12) {
//     console.log("Eh manha");
// } else if (hora === 13) {
//     console.log("Hora do almoço");
// } else {
//     console.log('Nem sei mais que horas sao');
// }


let lampada = "apagada";
let media = 7;


let status = (lampada === "apagada") ? "Que escuro a lampada esta apagada" : "Consigo ver";
console.log(status);

let aprovado = (media > 6) ? "Aprovado" : "Reprovado";
console.log(aprovado);