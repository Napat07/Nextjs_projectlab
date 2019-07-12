const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const CourseSchema = require("../../models/Course");
/////////
const Course = mongoose.model("course", CourseSchema);


router.get("/test", (req, res) => res.json({ msg: "Course Works" }));

//GetProduct
router.get("/", async (req, res) => {
  Course.find().then(data => {
    res.status(200).json(data);
  });
});


router.post("/", async (req, res) => {
  console.log("New Course:"+req.body.courseName)
  console.log(req.body.courseDetail)
  const newCourse = new Course({
    courseName: req.body.courseName,
    courseImage: req.body.courseImage,
    courseActive: req.body.courseActive,
    courseDetail: req.body.courseDetail
  });
    newCourse.save().then(data => {
      res.status(200).json(data);
      console.log("Success Add Course:"+req.body.courseName)
    });
});

//Delete
router.post("/del", (req, res, next) => {
  const id = req.body._id;
  console.log(id);
  Course.findByIdAndDelete({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;