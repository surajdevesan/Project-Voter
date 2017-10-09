const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  code: {
    type: Number,
    required: true
  },
  name: {
    type: String
    // TODO: required true needs to be done  
  }
});

const eventModel = mongoose.model('Event', eventSchema);
module.exports = eventModel;
