const express = require('express');
const app = express();

app.use((req, res, next) => {
	console.log("Um cliente se conectou");
	next();
});

app.get('/', (req, res)=>{

	res.send("<h1>Você está na pagina principal</h1>");

});

app.listen(3000, 'localhost', ()=>console.log("Servidor rodando na porta 3000"));
