const express = require("express");

const productsRouter = express.Router();
const {
  createNewProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
  getPageProducts,
  getProductByName,
} = require("../controllers/products");

productsRouter.post("/", createNewProduct);
productsRouter.get("/", getAllProducts);
productsRouter.patch("/:id", updateProductById);
productsRouter.delete("/:id", deleteProductById);
productsRouter.get("/search", getPageProducts);
productsRouter.get("/search_1", getProductByName);
module.exports = productsRouter;
