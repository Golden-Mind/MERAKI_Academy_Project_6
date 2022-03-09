const connection = require("../database/db");

const addIntersted = (req,res) => {
    const {product_id,user_id}=req.body;
    const query = `INSERT INTO intersted (product_id,user_id) VALUES (?,?)`;
const data=[product_id,user_id];
connection.query(query,data,(err,results)=>{
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

}
module.exports = {addIntersted};