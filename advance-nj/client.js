const eventEmitter = require('events');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new eventEmitter();
const server = require('./server');

server(client);

r1.on('line', (input) => {
    client.emit('command', input);
});

r1.on('output', (input) => {
    client.emit('command', input);
});

//myEvent.emit('command', 'Hello Server ji');

