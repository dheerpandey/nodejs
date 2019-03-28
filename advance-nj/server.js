const eventEmitter = require('events');

class server extends eventEmitter {
    constructor(client) {
        super();
        client.once('command', (param) => {
            this.Help(param);
        });
    }
    Help(param) {
        console.log(`help triggered with ${param}`);
    }



}
module.exports = (client) => { new server(client) };

