
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('userLoggedIn', (username) => {
  console.log(`User ${username} logged in.`);
});

eventEmitter.on('userLoggedOut', (username) => {
  console.log(`User ${username} logged out.`);
});

eventEmitter.on('sessionExpired', (username) => {
  console.log(`Session expired for user ${username}.`);
});


const username = 'Nitin Jagadeesh';

eventEmitter.emit('userLoggedIn', username);


eventEmitter.emit('userLoggedOut', username);

setTimeout(() => {
  eventEmitter.emit('sessionExpired', username);
}, 5000);
