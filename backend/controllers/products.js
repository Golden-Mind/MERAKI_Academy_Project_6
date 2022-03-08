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

module.exports = {
    createNewProduct,
    
  };
  