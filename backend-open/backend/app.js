const express = require('express');
const app = express();
const mongoose = require('mongoose');
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
app.get('/', (req, res, next) => {
  res.json({ message: 'voici la reponse' });
});
app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});
app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({ message: 'objet cree' });
});
module.exports = app;
