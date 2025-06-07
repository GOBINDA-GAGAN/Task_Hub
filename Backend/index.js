import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { notFoundPage, errorHandler } from "./middleware/error.js";
import morgan from "morgan";
import DbConnection from "./config/DbConnection.js";

dotenv.config();

const app = express();
app.use(express.json());
DbConnection(process.env.MONGODB_URL);

const PORT = process.env.PORT || 4000;
app.use(
  cors({
    // Allow requests only from the frontend URL specified in the .env file
    origin: process.env.FRONTEND_URL,

    // Allow only these HTTP methods from the frontend
    methods: ["GET", "POST", "DELETE", "PUT"],

    // Allow only these headers to be sent in the request
    allowedHeaders: ["Content-type", "Authorization"],
  })
);

app.use(morgan("dev"));

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
