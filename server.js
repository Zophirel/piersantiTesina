var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
server.listen(process.env.PORT || 3000);

/*server.get('/', function(req, res){
	res.send("DIO E' CANE");
});*/

server.set('view engine', 'ejs');

server.use('/assets', express.static('assets'));

server.get('/profile/:name', function(req, res){
	var data = {age: 18, job:'developer', hobbies:['read','sleep','weed', 'CIAO DIANA TI PIACE IL MIO SITO DIOCA']};
	res.render('profile', {person: req.params.name, data: data});
});

server.get('/contacts', function(req, res){
	res.render('contacts', {qs: req.query});
});

server.post('/contacts', urlencodedParser, function(req, res){
	res.render('contacts-success', {data: req.body});
});

server.get('/', function(req, res){
	res.render('index');
});

server.get('/button', function(req, res){
	res.render('button');
});
