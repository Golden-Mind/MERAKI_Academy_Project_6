const connection = require("../database/db");
// to add fav product
const addFavorite = (req, res) => {
  const { productId, userId } = req.body;
  const query = `INSERT INTO favorite_list (product_id , user_id ) VALUES (?,?)`;
  const data = [productId, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: "favorite_list created",
      result: result,
      data: data,
    });
  });
};
//to get fav product
const getFavorite = (req, res) => {
  const userId = req.params.id;
  const query = `SELECT * FROM products INNER JOIN favorite_list ON favorite_list.product_id=products.id AND favorite_list.user_id = ? AND favorite_list.is_deleted =?  `;
  const data = [userId, 0];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: "get favorite_list success ",
      result: result,
    });
  });
};
// to delete fav product
const deletFavorite = (req, res) => {
  const favId = req.params.id;
  const query = `UPDATE favorite_list SET is_deleted = ? WHERE  id =?  `;
  const data = [1,favId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
    res.status(201).json({
      success: true,
      message: "favorite_list deleted success ",
      result: result,
    });
  });
};
module.exports = { addFavorite, getFavorite, deletFavorite };
