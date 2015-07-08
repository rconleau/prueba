// Get quizes questions preguntas

exports.questions = function(req, res){
	res.render('quizes/question',{pregunta: 'Capital de Italia'});
}

// get Answers respuestas

exports.answers = function(req,res){
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answers', {respuesta: 'Correcto'});
	else {
		res.render('quizes/answers', {respuesta: 'Incorrecto'});
	}
}