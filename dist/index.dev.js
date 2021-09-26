"use strict";

var express = require('express');

var app = express();

var authRoute = require('./route/file.route');

var cors = require('cors');

app.use(cors());
app.use('/', authRoute);
app.listen(process.env.PORT || 3001, function () {
  return console.log("server is starting");
});