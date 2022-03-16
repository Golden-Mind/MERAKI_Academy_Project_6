const connection = require("../database/db");

const permission = (req, res) => {
  console.log("ya rabe");
  const permission = req.body.permissions;
  const query = "INSERT INTO permission (permission) VALUES (?)";
  const data = [permission];
  connection.query(query, data, (err, result) => {
    console.log("ya rabe");

    if (err) {
      throw err;
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    } else {
      res.status(201).json({
        success: true,
        message: `Success role permission`,
        role: result,
        data: data,
      });
    }
  });
};
module.exports = permission;
