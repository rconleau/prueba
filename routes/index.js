var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz 2015: El Gran Reto' });
});

//router.get('/quizes/question',quizController.question);
//router.get('/quizes/answer',quizController.answer);

module.exports = router;
