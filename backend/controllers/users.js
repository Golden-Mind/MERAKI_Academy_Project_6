const connection = require("../database/db")
const bcrypt = require("bcrypt");
const createNewUser = async (req, res) => {
    const { firstName, lastName, country, email, password, role_id, image } =
      req.body;
  
    const hashPassword = await bcrypt.hash(password, 5);
  
    const query = `INSERT INTO users (firstName, lastName,  country, email, password, role_id ,image) VALUES (?,?,?,?,?,?,?)`;
  
    const data = [firstName, lastName, country, email, hashPassword, 1, image];
  
    connection.query(query, data, (err, results) => {
      if (err) {
        if (err.sqlState == "23000") {
          return res.status(409).json({
            success: false,
            message: `The Email Already Exists`,
          });
        }
        return res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err,
        });
      } else {
        res.status(201).json({
          success: true,
          message: `The user has been created successfully`,
          results: results,
          data: data,
        });
      }
    });
  };
  //update user information
const updateInfo = async (req, res) => {
    const { firstName, lastName, country, email, password, image } = req.body;
    const hashPassword = await bcrypt.hash(password, 5);
    const id = req.params.id;
    const query = `UPDATE users SET firstName = ? , lastName = ? , country = ? , email = ? ,password = ?  ,image = ? WHERE id = ? `;
    const data = [firstName, lastName, country, email, hashPassword, image, id];
    connection.query(query, data, (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        res.status(404).json({
          success: false,
          message: `The user: ${id} is not found`,
        });
      } else {
        res.status(202).json({
          success: true,
          message: `The information of user that id = ${id} is updated`,
          results: result,
          data: data,
        });
      }
    });
  };
  module.exports = {createNewUser,updateInfo}