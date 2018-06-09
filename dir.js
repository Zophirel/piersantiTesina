var fs = require('fs');
//fs.unlink('write.txt');

//Sync
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

//Async
/*fs.mkdir('stuff', function(){
	fs.readFile('readme.txt', 'utf8', function(err, data){
		fs.writeFile('./stuff/writeme.txt', data, ((err, data)=>data?err:true));
	});
});*/

fs.unlink('./stuff/write.txt', function(){
	fs.rmdir('stuff',);
});

