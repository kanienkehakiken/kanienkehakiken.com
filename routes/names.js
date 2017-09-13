var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log('subdomains', console.log(req))
  console.log('subs', req.subdomains[0])
  res.render('index', {name: req.subdomains[0]});
});

module.exports = router;
