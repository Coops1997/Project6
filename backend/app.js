// MONGODB password: OsGmURCmKJf0Kct0
// MONGODB connection: mongodb+srv://sam:<password>@cluster1.y8n1jzi.mongodb.net/?retryWrites=true&w=majority
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/user'); // add user route
const sauceRoutes = require('./routes/sauces'); //add sauce route


// Connect to mongodb
mongoose.connect('mongodb+srv://sam:OsGmURCmKJf0Kct0@cluster1.y8n1jzi.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
     console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


module.exports = app; 
