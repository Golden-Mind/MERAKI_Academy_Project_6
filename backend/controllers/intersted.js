const connection = require("../database/db");

const addIntersted = (req, res) => {
  const { product_id, user_id } = req.body;
  const query = `INSERT INTO intersted (product_id,user_id) VALUES (?,?)`;
  const data = [product_id, user_id];
  connection.query(query, data, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: "product added to intersted list",
      result: results,
      data: data,
    });
  });
};

const getUserIntersted = (req, res) => {
  const query = `SELECT * FROM intersted INNER JOIN users ON  user_id=users.id INNER JOIN products ON intersted.product_id=products.id`;

  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "server error",
      });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "all intersted products",
        result: results,
      });
  });
};
module.exports = { addIntersted, getUserIntersted };
