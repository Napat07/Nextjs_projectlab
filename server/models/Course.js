const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  courseName: {
    type: String,
    required: true
  },
  courseImage: {
    type: String
  },
  courseActive: {
    type: String
  },
  courseUpdate: {
    type: Date,
    default: Date.now
  },
  courseDetail: {
    type: String,
    required: true
  }
  
});

module.exports = CourseSchema