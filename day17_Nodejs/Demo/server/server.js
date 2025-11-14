// here we will create a simple http based backend server using nodejs based on following steps 

//Step 1: Creating http constant

//Step 2: creating Http server 

//Step 3: starting the server @3000 port

//Step 4: running the server

const http = require('http'); 

const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to node.js server\n');
});

const PORT = 3000; 

server.listen(PORT, () => { 
    console.log(`Server running at http://localhost:${PORT}/`);
});