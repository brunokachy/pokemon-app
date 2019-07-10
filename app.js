const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const routes = require('./app/routes/pokemonRoutes');
const port = process.env.PORT || 3000;

app.listen(port);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', routes);
