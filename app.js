'use strict';

const express = require('express');
const app = express();

const personnel = require('./routes/personnel');

app.use(express.json());
app.set('port', process.env.port || 8000);

app.use('/personnel', personnel)

app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`))