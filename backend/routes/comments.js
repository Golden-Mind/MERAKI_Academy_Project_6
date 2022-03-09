const express = require("express");
const commentRouter = express.Router();
const {
    addNewComment,
    getAllComment
  } = require("../controllers/comments");


commentRouter.post("/:id",addNewComment)
commentRouter.get("/",getAllComment)
module.exports = commentRouter;
