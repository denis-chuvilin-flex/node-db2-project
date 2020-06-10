const express = require('express');

const db = require('./connection');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars').then((cars) => {
    res.json(cars);
  });
});
//note
