// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const path = require('path');
const User = require('./models/User'); // Import the model

const app = express();

app.use(bodyParser.json())
dotenv.config();
const PORT = process.env.PORT || 5000
const MONGOURL = process.env.MONGO_URL

mongoose
    .connect(MONGOURL).then(() => {
        console.log("Connected...");
        app.listen(PORT, () => {
            console.log('port   : ${PORT}');
        })
    })
    .catch((error) => console.log(error))