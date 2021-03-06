const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
//=========================================
const userRouter = require("./routes/users");

const productRouter = require("./routes/products"); //import products router
const intrestedRouter=require("./routes/intrested")
const commentRouter=require("./routes/comments")
app.use(cors());
app.use(express.json());
//================================
app.use("/user", userRouter);
app.use("/products", productRouter);

const roleRouter = require("./routes/roles");
const permissionRouter = require("./routes/permission");
const loginRouter = require("./routes/login");
const favoriteRouter = require("./routes/favorite");
app.use(cors());
app.use(express.json());
//================================



//=================================

app.use("/user",userRouter);
app.use("/roles",roleRouter);
app.use("/permission",permissionRouter);
app.use("/login",loginRouter);
app.use("/favorite",favoriteRouter);
app.use("/intrested",intrestedRouter)
app.use("/comment",commentRouter)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
