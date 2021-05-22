/// Import Requirements
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const bodyParser = require('body-parser')


/// Import Routes
const postsRoute = require('./routes/post');


/// Initialise Server
const app = express();

/// Run this for every request
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/// Routes
app.use('/posts', postsRoute);

app.get('/', (req,res)=>res.send("We Are On Home"))


/// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>console.log("Connected To DB"));

/// Listen on port 3000
app.listen(3000);