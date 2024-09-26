const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import your models
const { Product } = require('../models');

const sequelize = new Sequelize('postgres://justin:123456@postgres:5432/ecommerce-db') // Example for postgres

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Simple route
app.get('/', (req, res) => {
  res.send('Ketchup Song!');
});

app.get('/products', async (req, res) => {
  console.log("Products route was called!");
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Internal server error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

