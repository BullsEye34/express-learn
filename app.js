/// Import Requirements
const express = require('express');
const mongoose = require('mongoose');

/// Initialise Server
const app = express();

/// Connect to DB
mongoose.connect('mongodb+srv://vamshi:vamshiVIJ15@cluster0.wopx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }, ()=>console.log("Connected To DB"));

/// Listen on port 3000
app.listen(3000);