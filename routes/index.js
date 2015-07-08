var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz 2015: El Gran Reto' });
  res.render('titlebar', { title: 'Quiz 2015: El Gran Reto: Rconleau - Ricardo de la Concepcion Leal' });
  
});

module.exports = router;
