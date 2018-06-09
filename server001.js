var http = require('http');
var fs = require('fs');

/*
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

myReadStream.on('data', function(chunk){
	console.log('new chunk recieved');
	myWriteStream.write(chunk);
});

myReadStream.pipe(myWriteStream);
*/

var server = http.createServer(function(req, res){
	console.log('request was made by ' + req.url);
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}else if(req.url === '/api/fra'){
		var people = [{name: 'fra', age:18}, {name:'Cla', age:18}];
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(JSON.stringify(people));
	}else{
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res)
	}

	/*res.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {name: 'Fra', job: 'front-end', age:18};
	res.end(JSON.stringify(myObj));*/
	//var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	//myReadStream.pipe(res);


});

server.listen(3000, '127.0.0.1');
console.log('DIOCAN');