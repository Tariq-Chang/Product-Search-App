const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:name", (req, res) => {
  const name = req.params.name;

  if (name) {
    // const result = products.filter((product) => product.name.startsWith(name));
    const result = products.filter((product) => product.name.includes(name));

    return res.status(200).json(result);
  }
  return res.status(404).json({ message: "Could not find the product" });
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
