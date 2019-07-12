const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const UserSchema = require("../../models/User");
const User = mongoose.model("user", UserSchema);
const validateLoginInput = require('../../validation/login');
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

router.get("/", async (req, res) => {
    User.find().then(data => {
      res.status(200).json(data);
    });
  });


//add
router.post("/", async (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg', 
        d: 'mm' 
      });


    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        avatar,
        Username: req.body.Username,
        password: req.body.password,
        CFpassword: req.body.CFpassword,
        phoneNumber: req.body.phoneNumber,
        date: req.body.date,
        role:"user"
  
    });
    bcrypt.genSalt(11, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
  });
}
});

});
  
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);


  console.log('hello');
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  
  //checkemail
  User.findOne({ email }).then(user => {
   
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
      
    }
    //comparepassword
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, Username: user.name, avatar: user.avatar }; 
        console.log('Login complete');
        jwt.sign(
          payload,
          "123455",
          { expiresIn: 180000 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
              user
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        console.log('Password incorrect');
  

        return res.status(400).json(errors);
      }
      
    });
  });
});


  
  module.exports = router;

  