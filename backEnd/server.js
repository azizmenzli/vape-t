
const express = require('express');

const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();
const liquides=require('./Routers/liquidesRoute.js')
const mode=require('./Routers/modeRoute.js')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/liquides',liquides)
app.use('/mode',mode)
app.use('/api/users', require('./Routers/userRoutes'));






app.listen(port, () => console.log(`Server started on port ${port}`));