"use strict";

var express = require('express');

var router = express.Router();

var authservice = require("../service/file.service");

console.log("work");
router.get('/register', function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(authservice.register(req.body, res));

        case 2:
          console.log("work"); //res.send({message: "successfully registered"});

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(authservice.files(req.body, res));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;