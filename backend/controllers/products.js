const connection = require("../database/db");

//create new products

const createNewProduct = (req, res) => {
  const { image, productName, description, price, type } = req.body;
// const date=CURRENT_DATE();
  const query = `INSERT INTO products (image,productName,description,price,type,date) VALUES (?,?,?,?,?,CURRENT_DATE())`;
  const data = [image, productName, description, price, type];

  connection.query(query, data, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: " product created",
      result: results,
      data: data,
    });
  });
};

//get all products
const getAllProducts = (req, res) => {
    const query = `SELECT * FROM products WHERE is_deleted=0`;
    connection.query(query, (err, results) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "server error",
        });
      }
      res
        .status(200)
        .json({ success: true, message: "all productss", result: results });
    });
  };
//update product by id
const updateProductById = (req, res) => {
    const { image, productName, description, price, type } = req.body;
    const id = req.params.id;
  
    const query = `UPDATE products SET image=?,productName=?,description=?,price=?,type=?  WHERE id=?`;
    const data = [image, productName, description, price, type, id];
    connection.query(query, data, (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        res.status(404).json({
          success: false,
          message: `The product: ${_id} is not found`,
        });
      } else {
        res.status(202).json({
          success: true,
          message: `product updated`,
          results: result,
          data: data,
        });
      }
    });
  };

  //delete product by id
const deleteProductById = (req, res) => {
    const id = req.params.id;
    const query = `UPDATE products SET is_deleted=?  WHERE id=?`;
    const data = [1, id];
    connection.query(query, data, (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        res.status(404).json({
          success: false,
          message: `The Product : ${id} is not found`,
        });
      } else {
        res.status(202).json({
          success: true,
          message: ` Succeeded to delete product with id: ${id}`,
          results: result,
          id: id,
        });
      }
    });
  };
  
module.exports = {
    createNewProduct,
    getAllProducts,
    updateProductById,
    deleteProductById,
  };
  