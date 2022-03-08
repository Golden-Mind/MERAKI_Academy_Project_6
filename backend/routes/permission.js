const express = require("express")
const permissionRouter = express.Router();
const permission = require("../controllers/permission");

permissionRouter.post("/post",permission);


module.exports = permissionRouter