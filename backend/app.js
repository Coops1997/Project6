// MONGODB password: JhBne00pqyv86rKh
// MONGODB connection: mongodb+srv://samcooper:<password>@cluster0.vwq7lwf.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Thing = require('./models/thing');

const userRoutes = require('./routes/user'); // add user route
const sauceRoutes = require('./routes/sauces'); //add sauce route

// Connect to mongodb
mongoose.connect('mongodb+srv://samcooper:<JhBne00pqyv86rKh>@cluster0.vwq7lwf.mongodb.net/?retryWrites=true&w=majority')
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

    app.post('/api/stuff', (req, res, next) => {
        const thing = new Thing({
          title: req.body.title,
          description: req.body.description,
          imageUrl: req.body.imageUrl,
          price: req.body.price,
          userId: req.body.userId
        });
        thing.save().then(
          () => {
            res.status(201).json({
              message: 'Post saved successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      });

      app.use('/api/stuff', (req, res, next) => {
        Thing.find().then(
          (things) => {
            res.status(200).json(things);
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      });

      app.get('/api/stuff/:id', (req, res, next) => {
        Thing.findOne({
          _id: req.params.id
        }).then(
          (thing) => {
            res.status(200).json(thing);
          }
        ).catch(
          (error) => {
            res.status(404).json({
              error: error
            });
          }
        );
      });

module.exports = app; 
