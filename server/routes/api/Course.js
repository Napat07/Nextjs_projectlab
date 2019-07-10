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
    courseDescription: req.body.courseDescription,
    courseInstructor: req.body.courseInstructor,
    courseLevel: req.body.courseLevel,
    courseSubject: req.body.courseSubject,
    courseImage: req.body.courseImage,
    coursePrice: req.body.coursePrice,
    discount: req.body.discount,
    courseActive: req.body.courseActive

  });
    newCourse.save().then(data => {
      res.status(200).json(data);
    });
});
/*
router.post("/search", async (req, res) => {
  if(req.body.keyword){
  Product.find({ "productName": { "$regex": req.body.keyword, "$options": "i" } }).then(data => {
    console.log(req.body.keyword )
    res.status(200).json(data);
  });
}else{
  Product.find().then(data => {
    res.status(200).json(data);
  });
}
});

router.post("/item", async (req, res) => {
  if(req.body.keyword){
  Product.find({ "productName": req.body.keyword }).then(data => {
    console.log(req.body.keyword )
    res.status(200).json(data);
  });
}else{
  Product.find().then(data => {
    res.status(200).json(data);
  });
}
});

//add
router.post("/", async (req, res) => {
  const newProduct = new Product({
    productUPC: req.body.productUPC,
    productImage: req.body.productImage,
    productName: req.body.productName,
    productBrand: req.body.productBrand,
    productType: req.body.productType,
    fullPrice: req.body.productPrice,
    tax: req.body.tax,
    notax: req.body.notax,
    availability: req.body.availability,
    weight: req.body.weight

  });
    newProduct.save().then(data => {
      res.status(200).json(data);
    });
});

router.patch("/:productId", (req, res, next) => {

  const id = req.params.productId;
  const updateOps = {};
  
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
  
router.post("/del", (req, res, next) => {
  console.log("ggggggggggggg")
  console.log(req)
  console.log(req.body);
  console.log(req.body._id);
  const id = req.body._id;
  console.log(id);
  Product.findByIdAndDelete({ _id: id })
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
*/
module.exports = router;