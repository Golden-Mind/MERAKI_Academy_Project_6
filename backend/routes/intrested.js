const express = require("express");
const intrestedRouter = express.Router();
const {
    addIntersted,
  } = require("../controllers/intersted");


intrestedRouter.post("/",addIntersted)
module.exports = intrestedRouter;

