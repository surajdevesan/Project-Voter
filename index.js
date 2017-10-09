/*
  Server Entry
*/
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const io = require('socket.io')();
require('./server/utils/services/db');
const chatModel = require('./server/utils/models/chatSchema');
const eventModel = require('./server/utils/models/eventSchema');
const activityModel = require('./server/utils/models/activitySchema');


// var Promise = require("bluebird");
// Promise.promisifyAll(require("mongoose"));
// let a = new eventModel();
// Object.assign(a, {
//   code: 100,
//   name: "PR approved"
// });
// a.save();
// let a = new activityModel();
// Object.assign(a, {
//   eventCode: 100,
//   eventName: "PR approved",
//   name: "Suraj",
//   timestamp: 1507462985293
// });
// a.save();

app.get('/', function (req, res) {
  res.send('Hello World!')
});
app.get('/getChat', (req, res) => {
  chatModel.find()
    .limit(10)
    .skip(req.pageNo * 10)
    .exec((err, details) => {
      console.log('@getChat');
      res.json(details);
    });
});
app.get('/getActivities', (req, res) => {
  activityModel.find()
    .limit(10)
    .skip(req.pageNo * 10)
    .exec((err, details) => {
      console.log('@getActivities');
      res.json(details);
    });
});
io.on('connection', async (client) => {
  console.log('a user connected');
  client.on('subscribeToTimer', (msgDetails) => {
    console.log('Message recieved', msgDetails, msgDetails.message);
    const chatObj = new chatModel();
    Object.assign(chatObj, msgDetails);
    try{ 
      chatObj.save();
    } catch(e){
      console.log('@error', e);
      return;
    }
    
    console.log('@here save');
    // setInterval(() => {
    client.emit('message', 'Hello world');
    // }, interval);
  });
});
const port = 8000;
http.listen(port, () => {
  console.log('listening on port ', port);
});

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
// io.listen(3000);
