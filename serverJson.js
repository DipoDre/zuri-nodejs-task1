const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type' : 'application/json' });
    res.end(`{
        "name": "Dare Afolabi",
        "country": "Nigeria",
        "hobby": "Coding"
    }`);
    
});

server.listen(4000, 'localhost', () => {
    console.log('listening for requests on port 4000');
})

