// Import the built-in http module
const http = require('http');

// Define the hostname and port
const hostname = 'localhost';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the content type to text/html
  res.setHeader('Content-Type', 'text/html');

  // Routing logic
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to Node.js Server!</h1><p>This is the home page.</p>');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Us</h1><p>This is a simple Node.js web server prototype.</p>');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('<h1>Contact Us</h1><p>Email: support@nodeapp.com</p>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
