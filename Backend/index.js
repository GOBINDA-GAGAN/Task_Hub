import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { notFoundPage, errorHandler } from "./middleware/error.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
















//? basic home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to TaskHub Api",
  });
});






//? error middleware
app.use(errorHandler);

//? not found page  middleware
app.use(notFoundPage);

app.listen(PORT, () => {
  console.log("server started at port:" + PORT + " 🏡");
});
