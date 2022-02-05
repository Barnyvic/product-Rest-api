// importing express dotenv mongoose
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";

// initializing express
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(router);

// connect server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

// connect Database
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, () => {
  console.log("Mongodb connected");
});
