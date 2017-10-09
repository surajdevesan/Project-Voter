const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  eventCode: {
    type: Number,
    required: true
  },
  eventName: {
    type: String
  },
  name: {
    type: String
    // TODO: required true needs to be done  
  },
  timestamp: {
    type: Number
    // TODO: required true needs to be done  

  }
});

const activityModel = mongoose.model('Activity', activitySchema);
module.exports = activityModel;
