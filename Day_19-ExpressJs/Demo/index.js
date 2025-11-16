//here we can create a exprees Js based webserver for demonstarting webserver

// step:-1 create a ref
// step:-2 defining app.get()
//step:-3 defining app.listen()
//step:-4 Executing the file


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express.js!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});





