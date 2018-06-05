const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://localhost/my-blog');
mongoose.Promise = Promise;

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
    res.status(200).send();
});

module.exports = app;
