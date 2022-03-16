const connection = require("../database/db");

const roles = (req, res) => {
  const role = req.body.role;
  const query = "INSERT INTO roles (role) VALUES (?)";
  const data = [role];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    } else {
      res.status(201).json({
        success: true,
        message: `Success role created`,
        role: result,
        data: data,
      });
    }
  });
};
module.exports = roles;
