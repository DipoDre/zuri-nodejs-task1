const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end("Welcome to the Zuri Training!");
    
});

server.listen(4000, 'localhost', () => {
    console.log('listening for requests on port 4000');
})

