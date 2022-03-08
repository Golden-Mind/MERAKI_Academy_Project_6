const express = require("express")
const permissionRouter = express.Router();
const {permission} = require("../controllers/permission")
permissionRouter.post("/",permission)

module.exports = permissionRouter