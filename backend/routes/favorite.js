const express = require("express");
const favoriteRouter = express.Router();
const {
  addFavorite,
  getFavorite,
  deletFavorite,
} = require("../controllers/favorite");
favoriteRouter.post("/",addFavorite);
favoriteRouter.get("/get-fav/:id",getFavorite);
favoriteRouter.delete("/delete-fav",deletFavorite)
module.exports = favoriteRouter;
