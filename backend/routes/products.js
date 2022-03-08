const express = require("express");

const productsRouter = express.Router();
const {createNewProduct,getAllProducts,updateProductById,
    
  } = require("../controllers/products");

  productsRouter.post("/", createNewProduct);
  productsRouter.get("/", getAllProducts);
  productsRouter.patch("/:id", updateProductById);
  module.exports = productsRouter;