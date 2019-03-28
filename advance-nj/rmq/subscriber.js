//https://www.cloudamqp.com/blog/2015-05-19-part2-2-rabbitmq-for-beginners_example-and-sample-code-node-js.html
//git reset --hard HEAD
//git remote add origin http://IP/path/to/repository
//git clean

var amqp = require('amqplib/callback_api');
var amqpConn = null;
start();
function start() {
  amqp.connect("amqp://localhost", function (err, conn) {
    if (err) {
      console.error("[AMQP] ddddd", err.message); //[AMQP] ddddd connect ECONNREFUSED 127.0.0.1:5672
      return setTimeout(start, 10000);
    }
    conn.once("error", function (err) {
      if (err.message !== "Connection closing") {
        console.error("[AMQP] conn error", err.message);
      }
    });
    conn.once("close", function () {
      console.error("[AMQP] reconnecting");
      return setTimeout(start, 1000);
    });
    console.log("[AMQP] connected");
    amqpConn = conn;
    whenConnected();
  });
}

function whenConnected() {
  startWorker();
}

function startWorker() {
  amqpConn.createChannel(function (err, ch) {
    if (closeOnErr(err)) return;
    ch.once("error", function (err) {
      console.error("[AMQP] channel error", err.message);
    });
    ch.once("close", function () {
      console.log("[AMQP] channel closed");
    });

    ch.prefetch(10);
    let q = "hello";
    ch.assertQueue(q, { durable: false }, function (err, _ok) {
      if (closeOnErr(err)) return;
      ch.consume(q, function (msg) {
        //console.log(" [x] Received %s", msg.content.toString());
        work(msg, function (ok) {
          try {
            if (ok)
              ch.ack(msg);
            else
              ch.reject(msg, true);
          } catch (e) {
            closeOnErr(e);
          }
        });
      }, { noAck: false });
      console.log("Worker is started");
    });
  });
}

function work(msg, cb) {
  console.log("MESSAGE IS => ", msg.content.toString());
  cb(true);
}

function closeOnErr(err) {
  if (!err) return false;
  console.error("[AMQP] error", err);
  amqpConn.close();
  return true;
}