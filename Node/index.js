// app.js
const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/user.routes');
const orderRoutes = require('./routes/order.routes');
const weatherRoutes = require('./routes/currency.routers');
const connectDB = require('./mongo.connection');
const cors = require('cors');
const app = express();
const port = process.env.PORT

app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


app.use('/api/products', productRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/currency', weatherRoutes);


