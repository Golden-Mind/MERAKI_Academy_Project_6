const express = require("express");
const intrestedRouter = express.Router();
const {
    addIntersted,
    getUserIntersted
  } = require("../controllers/intersted");


intrestedRouter.post("/",addIntersted)
intrestedRouter.get("/",getUserIntersted)
module.exports = intrestedRouter;

