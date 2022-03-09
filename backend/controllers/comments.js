const connection = require("../database/db");

const addNewComment=(req,res)=>{
    const productId = req.params.id;
    const query = `INSERT INTO comments ( comment,commenter_id , productId) VALUES(?,?,?)`;
  const data = [req.body.comment, req.body.commenter_id, productId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(404).json({
        success: false,
        message: `something went wrong while creating a new comment`,
      });
    } else {
      res.status(202).json({
        success: true,
        message: `The comment has been created success`,
        results: result,
      });
    }
  });
}

const getAllComment=(req,res)=>{

}

module.exports = {addNewComment,getAllComment};