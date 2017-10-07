/*
  Server Entry
*/
const express = require('express');
const app = express();
var http = require('http').Server(app);
// var io = require('socket.io')(http);
const io = require('socket.io')();

app.get('/', function (req, res) {
  res.send('Hello World!')
})
io.on('connection', function(client){
  console.log('a user connected');
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    // setInterval(() => {
      client.emit('message', 'Hello world');
    // }, interval);
  });
});
const port = 8000;
io.listen(port);
console.log('listening on port ', port);
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
// io.listen(3000);
