// require('dotenv').config({path:'./env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.error("ERROR: ", error);
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.info(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error("MONGO DB connection failed!! ",err);
});









/*
// It's also a approach many developers use but I will go with more clean way
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error)=>{
        console.log(" Error: ", error);
        throw error;
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port: ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("ERROR == ", error);
    throw error;
  }
})();

*/
