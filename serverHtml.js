const http = require('http');

const server = http.createServer((req, res) => {
    
});

server.listen(4000, 'localhost', () => {
    console.log('listening for requests on port 4000');
})

