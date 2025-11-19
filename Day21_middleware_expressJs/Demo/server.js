//this file will have all server related code ie
// express setup, routes, custom middleware and server start etc
// order of custom middleware and routes is important as it is executed in the order they are defined sequentially

// 1. import express
const express = require('express');

//creating an express application instance
const app = express();

//2 . middleware to parse json and urlencoded data
//express.json() and express.urlencoded() are built-in middleware functions in Express.js
//app.use is used to mount the specified middleware function(s) at the path which is being specified
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//3 .custom middleware to log request method and url
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 4. Define routes( these will go through middleware first )
// app.get() defines a route handler for GET requests to the root URL

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 5. Start the server and listen on a specified port

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//for handling error we can define error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//below flow of request is followed in above code
// Client Request -> Custom Middleware logs request method and url and add requestTime property  -> Route Handler -> Response to Client 






