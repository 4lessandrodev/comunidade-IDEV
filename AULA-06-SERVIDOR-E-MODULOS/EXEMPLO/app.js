const express = require("express");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use((req, res, next) => {
	console.log("Cliente se conectou ", req.url);
	next();
});

server.get('/', function (req, res) {
	res.send("<meta charset='UTF-8'><h1>Você está na pagina principal</h1>")	
});

server.get('/produtos', (req, res) => {
	res.send("<meta charset='UTF-8'><h1>Você está na pagina de produtos</h1>");
});

server.post('/produtos', (req, res) => {
	console.log(req.body);
	res.send('Ok');
});

server.put('/produtos', (req, res) => {
	res.send(req.body);
})

server.use((req, res, next) => {
	res.send("<meta charset='UTF-8'><h1>404</h1>");
});


server.listen(3001, 'localhost', ()=>{
 console.log("Servidor rodando na porta 3001");
});
