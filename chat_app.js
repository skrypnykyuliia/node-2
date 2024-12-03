const EventEmitter = require('events');

const chatEmitter = new EventEmitter();


const sendMessage = (username, message, emitter) => {
    emitter.emit('message', { username, message });
};

chatEmitter.on('message', (data) => {
    console.log(`${data.username}: ${data.message}`);
});

sendMessage('Yuliia', 'Hello, friends!', chatEmitter);
sendMessage('Kate', 'Hi! How are you?', chatEmitter);
sendMessage('Ann', 'Hi! Great and you?', chatEmitter);
sendMessage('Yuliia', 'Good!', chatEmitter);
sendMessage('Yuliia', 'What are you doing!', chatEmitter);
