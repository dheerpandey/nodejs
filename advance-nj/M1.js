//console.log(new Buffer(100));
const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk) {
        const buffer = Buffer.from(chunk);
//        console.log(buffer.toString());
        console.log('String Decoder=>' + decoder.write(buffer));
    }

    if (chunk != null) {

    }

});




process.on('exit', () => {
    console.log('exit');
});

process.on('uncaughtException', () => {
    console.log('uncaughtException');
    process.exit(1);
});

process.stdin.resume();

