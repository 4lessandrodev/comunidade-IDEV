const User = require('../Models/User');


module.exports = {

salvarNovoUsuario:function(email, senha) {
        const novoUsuario = new User();
        novoUsuario.email = email;
        novoUsuario.password = senha;
        novoUsuario.create(novoUsuario);
}


};