
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from './routes/userRoute.js'

const app = express();

app.use(bodyParser.json())
dotenv.config();//mongodb://localhost:27017/
const PORT = process.env.PORT || 5000
const MONGOURL = process.env.MONGO_URL

mongoose
    .connect(MONGOURL).then(() => {
        console.log("Connected...");
        app.listen(PORT, () => {
            console.log(process.env.MONGO_URL);
        })
    })
    .catch((error) => console.log(error))
app.use("/api/user", route)   