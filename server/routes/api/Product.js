const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ProductSchema = require("../../models/Product");
const Cart = require("../../models/Cart")
/////////
const Product = mongoose.model("product", ProductSchema);

///////

//////

router.get("/test", (req, res) => res.json({ msg: "Product Works" }));

//GetProduct
router.get("/", async (req, res) => {
  Product.find().then(data => {
    res.status(200).json(data);
  });
});


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

router.get('/add-to-cart/:id', function(req,res,next){
    var productName = req.params.id;
    var cart = new Cart(req,session.cart ? req.session.cart : {items : {}} );

    Product.findById(productName,function(err, product){
      if (err){
          return res.redirect('/');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/');
    });
});


router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
      return res.render('shop/shopping-cart', {products: null});
  } 
   var cart = new Cart(req.session.cart);
   res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});


module.exports = router;