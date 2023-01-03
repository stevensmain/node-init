const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello, world');
})

const PORT = 3000
app.listen(PORT);
console.log(`Server listening on ${PORT}`)