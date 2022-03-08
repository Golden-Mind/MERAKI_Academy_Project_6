const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const userRouter = require("./routes/users");
const productRouter = require("./routes/products"); //import products router
app.use(cors());
app.use(express.json());
//================================
app.use("/user", userRouter);
app.use("/products", productRouter);
//=================================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
