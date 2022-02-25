const express = require('express');
const app = express();

app.use('/api/movie', require('./movies'));

module.exports = app;