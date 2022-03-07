const express = require("express")
const userRouter = express.Router();

const {updateInfo , createNewUser} = require("../controllers/users");
userRouter.post("/", createNewUser);
userRouter.put("/:id",updateInfo);




module.exports = userRouter;