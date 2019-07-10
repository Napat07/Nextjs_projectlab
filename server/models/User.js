const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  userId: Schema.Types.ObjectId,
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  Username:{
    type: String
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  CFpassword: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  role:{
    type: String
  },
});

module.exports = UserSchema; 
