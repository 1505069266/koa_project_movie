const fs = require('fs');

// fs.readFile("./package.json",(err,data)=>{ //原生的node   fs模块的异步读取文件信息方法
// 	if(err){
// 		return console.log(err)
// 	}
// 	data = JSON.parse(data);
// 	console.log(data.description)
// })

//用Promise封装上面的模块
function readFileAsync(path){
	return new Promise((resolve,reject)=>{
		fs.readFile(path,(err,data)=>{ //原生的node   fs模块的异步读取文件信息方法
			if(err){
				reject(err)
			}
			data = JSON.parse(data);
			resolve(data)
			console.log(data.description)
		})
	})
}

// readFileAsync("package.json").then(res=>{
// 	console.log(res)
// }).catch(err=>{
// 	console.log(err)
// })

//使用nodejs的util模块
// const util = require('util')

// util.promisify(fs.readFile)('package.json')
// 	.then(JSON.parse)
// 	.then(data=>{
// 		console.log(data)
// 	})
// 	.catch(err=>{
// 		console.log(err)
// 	})
	