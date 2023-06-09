require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = process.env.NODE_DEVELOPMENT;
app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>")
})

app.post("/products", (req, res) => {
   try {
    
   } catch (error) {
    console.log(error)
    res.status(500).json({message: error.message})
   }
})

mongoose.connect(db)
.then(() => {
    console.log("Mongodb connected")
}) 
.catch(err => console.log(err))

const port = process.env.PORT || 4040;

app.listen(port, console.log(`Port is running on ${port}`))
