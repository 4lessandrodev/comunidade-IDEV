const bd = require('../config/bancoDeDados');
class User{
   
   constructor(){
      this._id = Number();
      this._email = String();
      this._password = String();
   } 

   get id() {
      return this._id;
   }

   get email() {
      return this._email;
   }

   get password() {
     return this._password;
   }

   set id(valor) {
      if (typeof valor === 'string') {
         throw new Error("Cara, tu tem que me passar um numero pow");
      }
      this._id = valor;
   }

   set email(valor) {
      this._email= valor;
   }

   set password(valor) {
      this._password = valor;
   }




   //Metodo salvar
   create(usuario) {
      
      if (bd.users.length !== 0) {
         usuario.id = bd.users[bd.users.length - 1]._id + 1;
      } else {
         usuario.id = 1;
      }

      bd.users.push(usuario);
      console.table(bd.users);
   }

   
}


module.exports = User;