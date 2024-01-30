import  express  from "express";
import { PORT } from "./config.js";
import { mongodburl } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/',(request , response ) => {
    console.log(request);
    return response.status(200).send("Welcome to backend");
})

mongoose
    .connect(mongodburl)
    .then( () => {
        console.log("Connection succesfull")
        app.listen(PORT, () => {
            console.log(`App is listening to port :${PORT}`);
        })
    })
    .catch((error)=>{
        console.log("Error occured " , error.message)
    })