var fs = require('fs');

//var read = fs.readFileSync('readme.txt', 'utf8');
//fs.writeFileSync('writeme.txt', read);

fs.readFile('readme.txt' , 'utf8', function(err, data){
	//console.log(data);
	fs.writeFile('write.txt', data, ((err, data)=>data?err:true))
});

