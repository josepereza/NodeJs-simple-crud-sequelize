const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const Product = require("./models/product");
const adminRoutes = require("./routes/admin");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);

sequelize
  .sync()
  .then(result => {
    return Product.findByPk(1);
  })
  .catch(err => {
    console.log(err);
  });

app.listen(3000);
