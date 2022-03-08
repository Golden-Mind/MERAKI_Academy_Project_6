const express = require("express");

const productsRouter = express.Router();
const {createNewProduct,
    
  } = require("../controllers/products");

  productsRouter.post("/", createNewProduct);
  module.exports = productsRouter;