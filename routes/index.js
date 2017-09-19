var express = require('express');
var router = express.Router();
var directory = require('../directory.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  let subdomain = req.subdomains.shift()
  data = directory(subdomain)
  console.log('data', directory.data)
  if(data === null) {
    let host = req.headers.host.split('.')
    if(host.length === 3) host.shift()
    host = host.join('.')
    console.log('host', req.headers.host, host)
    return res.render('missing', {subdomain, host, data:directory.data})
  }
  res.render('index', data);
});

module.exports = router;
