const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get("/",(req,res)=>res.send({"Hi":"Heyyo"}))

app.listen(3000);