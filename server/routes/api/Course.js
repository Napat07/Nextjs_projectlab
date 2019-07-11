const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const CourseSchema = require("../../models/Course");
/////////
const Course = mongoose.model("course", CourseSchema);


///////

//////

router.get("/test", (req, res) => res.json({ msg: "Course Works" }));

//GetProduct
router.get("/", async (req, res) => {
  Course.find().then(data => {
    res.status(200).json(data);
  });
});
router.post("/", async (req, res) => {
  const newCourse = new Course({
    courseName: req.body.courseName,
    courseImage: req.body.courseImage,
    courseActive: req.body.courseActive,
    courseDetail: req.body.courseDetail

  });
    newCourse.save().then(data => {
      res.status(200).json(data);
    });
});

module.exports = router;