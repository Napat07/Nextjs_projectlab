const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
require("dotenv").config();
const Product = require('./routes/api/Product');
const User = require('./routes/api/User');
const Course = require('./routes/api/Course');
const passport = require('passport');

///////////////

const port = process.env.PORT;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
//////////////////

const mongooseOptions = {
  useNewUrlParser: true
};

mongoose
  .connect("mongodb+srv://napat07:0865944040@pjl-0ezqt.mongodb.net/pjldb2?retryWrites=true&w=majority", mongooseOptions)
  .then(() => console.log("Database connected"));

mongoose.connection.on("error", err => {
  console.log(`Database connection error: ${err.message}`);
});


require('./config/passport')(passport);

/////////////////

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());


    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });
    ////////////////
    server.use("/api/product", Product);
    server.use("/api/user", User);
    server.use("/api/course", Course);



    //////////////////
    server.get("/product/:productname", (req, res) => {
    
      const queryParams = { productname:req.params.productname,lession:req.query.lession }
       return app.render(req, res, "/product", queryParams);
     });
     ///////////////
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`Server listening on ${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
