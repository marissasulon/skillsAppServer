'use strict';

const express = require('express');
const PORT = process.env.PORT || 8000;
const knex = require('./db/knex.js');
const app = express();
const bodyParser = require('body-parser');


app.use((req,  res) => res.send('hello'));

app.get('/personnel', (req, res) => {
    res.send(personnel);
    app.get('personnel/: index`, (req, res) => {
        console.log('***, \n') req.params);
    const i = Number.parseInt(req.params.index);
    const person = personnel[i]
    res.send(personnel);
}        
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});