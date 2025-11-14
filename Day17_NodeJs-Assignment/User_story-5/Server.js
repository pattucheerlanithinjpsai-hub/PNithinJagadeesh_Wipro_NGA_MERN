const http = require('http');
const fs = require('fs');
const path = require('path');

// Create HTTP server
const server = http.createServer((req, res) => {
  // Set header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Route handling
  if (req.url === '/') {
    res.end('Hello from Node.js Server');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Page Not Found</h1>');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
  console.log('Press CTRL + C to stop the server');
});
