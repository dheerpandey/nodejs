const http = require("http");
const request = require("request");
const bodyparser = require("body-parser");

var requestListener=(req, res) =>
{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello Node JS');
}

http.createServer(requestListener).listen(3000,()=>{
    console.log("Web Server Started at port 3000:");
});

