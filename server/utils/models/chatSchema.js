const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  sender: {
    type: String,
    required: true
  },
  groupName: {
    type: String
    // TODO: required true needs to be done  
  },
  timestamp: {
    type: Number
    // TODO: required true needs to be done  

  },
  message: {
    type: String,
    required: true
  }
});

const chatModel = mongoose.model('ChatModel', chatSchema); 
module.exports = chatModel;
