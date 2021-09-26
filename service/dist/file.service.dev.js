"use strict";

var fs = require('fs');

var dir = './tmp';
var service = {
  register: function register(data, res) {
    console.log("here");

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      console.log("dir created");
    }

    var ts = Date.now();
    var date_ob = new Date(ts);
    var date = date_ob.getDate();
    var month = date_ob.getMonth() + 1;
    var year = date_ob.getFullYear();
    console.log(date, month, year);
    fs.writeFile("./tmp/".concat(date, "-").concat(month, "-").concat(year, ".txt"), "current-timestamp->".concat(Date.now()), function (err) {
      if (err) throw err;
      console.log('Results Received');
    });
    fs.readdir("./tmp", function (err, data) {
      if (err) console.log("Error !!");else console.log(data);
    });
    res.send({
      message: "successfully created"
    });
    return res.statusCode = 200;
  },
  files: function files(data, res) {
    fs.readdir("./tmp", function (err, data) {
      if (err) console.log("Error !!");else {
        console.log(data);
        res.send(data);
      }
    });
  }
};
module.exports = service;