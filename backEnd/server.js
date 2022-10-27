const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();
const liquides=require('./Routers/liquidesRoute.js')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/liquides',liquides)







app.listen(port, () => console.log(`Server started on port ${port}`));