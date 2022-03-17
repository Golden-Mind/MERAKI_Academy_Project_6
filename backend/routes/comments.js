const express = require("express");
const commentRouter = express.Router();
const { addNewComment, getAllComment } = require("../controllers/comments");

commentRouter.post("/:id", addNewComment);
commentRouter.get("/:productId", getAllComment);
module.exports = commentRouter;
