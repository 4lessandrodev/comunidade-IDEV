const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<meta charset='UTF-8'><h1>Você está na pagina principal</h1>");
        res.end();

    } else if (req.url === '/produtos' && req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write("<meta charset='UTF-8'><h1>Você está na pagina de produtos</h1>");
        res.end();

    } else {

        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end("404");

    }

});

server.on("connection", () => {
    console.log('Um cliente se Conectou');
});

server.listen(3000, 'localhost', () => console.log('Servidor rodanto na porta 3000'));






