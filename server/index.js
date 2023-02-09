const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
