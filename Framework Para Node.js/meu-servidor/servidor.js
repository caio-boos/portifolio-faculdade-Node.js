const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end('Hello, word');
            break;
        case '/sobre':
            res.statusCode = 200;
            res.end('Pagina Sobre');
            break;
        case '/contato':
            res.statusCode = 200;
            res.end('Pagina de Contato');
            break;
        default:
            res.statusCode = 404;
            res.end('Pagina não encontrada');
            break;
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
