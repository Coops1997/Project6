// MONGODB password: OsGmURCmKJf0Kct0
// MONGODB connection: mongodb+srv://sam:<password>@cluster1.y8n1jzi.mongodb.net/?retryWrites=true&w=majority
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');            

const userRoutes = require('./routes/user');

const sauceRoutes = require('./routes/sauce');

const app = express();

app.use(cors({origin: 'http://localhost:4200'}));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// Connect to mongodb
mongoose.connect('mongodb+srv://sam:OsGmURCmKJf0Kct0@cluster1.y8n1jzi.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
     console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use(bodyParser.json());

app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/sauce', sauceRoutes);

app.use('', (req, res, next) => {
    res.end('Server Created!');
});

module.exports = app; 