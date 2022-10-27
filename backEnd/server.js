const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();
const liquides=require('./Routers/liquidesRoute.js')
const mode=require('./Routers/modeRoute.js')
const atomizer=require('./Routers/atomizer.js')
const DripTip=require('./Routers/dripTip.js')
const VapeCollection=require('./Routers/vapeCollection.js')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/liquides',liquides)
app.use('/mode',mode)
app.use('/api/users', require('./Routers/userRoutes'));
app.use('/atomizer',atomizer)
app.use('/dripTip',DripTip)
app.use('/vape',VapeCollection)






app.listen(port, () => console.log(`Server started on port ${port}`));