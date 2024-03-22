// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB();

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
