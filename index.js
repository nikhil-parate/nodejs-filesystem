const express = require('express');
const app = express();

const authRoute = require('./route/file.route');
const cors = require('cors');

app.use(cors());
  
app.use('/',authRoute);

app.listen(process.env.PORT || 3001,()=>
console.log("server is starting"));
  