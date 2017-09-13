var express = require('express');
var router = express.Router();
var directory = require('../directory.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  data = directory(req.subdomains)
  console.log('data', data)
  if(data === null) return res.render('missing', null)
  res.render('index', data);
});

module.exports = router;
