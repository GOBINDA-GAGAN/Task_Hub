import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  console.log("hello world");
});
app.listen(PORT, () => {
  console.log("server started at port:" + PORT + " 🏡");
});
