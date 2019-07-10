const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const routes = require('./app/routes/pokemonRoutes');
const port = process.env.PORT || 3000;

app.listen(port);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', routes);

//400 - Check for wrong route url
app.use(function (req, res, next) {
    return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

// 500 - Any server error
app.use(function (err, req, res, next) {
    return res.status(500).send({ error: err });
});

// Export our app for testing purposes
module.exports = app;
