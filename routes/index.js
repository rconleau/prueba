var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz 2015: El Gran Reto' });
  res.render('titlebar', { title: 'Quiz 2015: El Gran Reto: Rconleau - Ricardo de la Concepcion Leal' });
});

router.get('/quizes/questions',quizController.question);
router.get('/quizes/answers',quizController.answer);

module.exports = router;
