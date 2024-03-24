// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on("error",(error) => {
        console.log("Error after connecting to MongoDB:: ",error);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port:: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MonogoDB connection FAILED !!!",error)
})











/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
const app = express()

( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error",(error) => {
            console.log("ERROR:: ",error);
            throw error
        })
        app.listen(process.env.PORT,( ) => {
            console.log((`App is listening on port ${process.env.PORT}`));
        })
    } catch (error) {
        console.log("ERROR:: ",error)
        throw error
    }
})() //iife also can start with ;()()

*/
