const express = require('express');
const app = express();
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
mongoose
  .connect('mongodb+srv://open:cedric56@cluster-openclass.vchtskl.mongodb.net/')
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => {
    console.log(`connection failed ${err}`);
  });
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
app.use(express.json());
app.use('/api/stuff', stuffRoutes);

module.exports = app;
