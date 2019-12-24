const fs = require('fs')

fs.readFile('movie.json',(err,data)=>{
	if(err) throw err;
	data = JSON.parse(data)
	console.log(data)
})