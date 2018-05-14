const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  email: String
});

module.exports = mongoose.model('Event', EventSchema);