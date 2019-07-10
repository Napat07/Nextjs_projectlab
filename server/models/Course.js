const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  courseId: Schema.Types.ObjectId,
  courseName: {
    type: String,
    required: true
  },
  courseDescription: {
    type: String
  },
  courseInstructor: {
    type: String
  },
  courseLevel: {
    type: String
  },
  courseSubject: {
    type: String
  },
  courseImage: {
    type: String
  },
  coursePrice:{
    type: String,
    required: true
  },
  discount: {
    type: String
  },
  courseActive: {
    type: String
  },
  courseUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = CourseSchema