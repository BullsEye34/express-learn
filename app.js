/// Import Requirements
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')

/// Initialise Server
const app = express();

/// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>console.log("Connected To DB"));

/// Listen on port 3000
app.listen(3000);