const url = `https://movie.douban.com/tag/#/?sort=U&range=0,10&tags=`
const puppeteer = require("puppeteer")
const fs = require('fs')

const sleep = time=> new Promise((resolve,reject)=>{
	setTimeout(resolve,time)
})

!(async ()=>{
	console.log('Start visit target page')
	const browser = await puppeteer.launch({
		args: ['--no-sandbox'],
		dumpio:false
	})
	
	const page = await browser.newPage()
	await page.goto(url,{
		waitUntil: 'networkidle2'
	})
	
	await sleep(3000);
	
	await page.waitForSelector('.more');
	
	for(let i = 0; i < 1; i++){
		await sleep(3000)
		await page.click('.more')
	}
	
	const result = await page.evaluate(()=>{
		let $ = window.$
		let items = $('.list-wp a')
		let links = []
		
		if(items.length >= 1){
			items.each((index,item)=>{
				let it = $(item);
				let doubanId = it.find('div').data('id');
				let title = it.find('.title').text()
				let rate = Number(it.find('.rate').text())
				let poster = it.find('img').attr('src').replace('s_ratio','l_ratio')
				
				links.push({
					doubanId,
					title,
					rate,
					poster
				})
			})
		}
		return links
	})
	browser.close()
	console.log(result)
	let data = JSON.stringify(result)
	fs.writeFile('movie.json',data,(err,res)=>{
		if(err){
			return console.log(err)
		}
		console.log("传输完成")
	})
	// const writeStream = fs.createWriteStream('movie.txt')
	// let data = Buffer.alloc(5,result)
	// for(let i = 0; i < 100; i++){
	// 	writeStream.write(data,'utf-8')
	// }
	// writeStream.end();
	// writeStream.on('finish',function(){
	// 	console.log("传输完毕")
	// })
	// writeStream.on('error',function(){
	// 	console.log("传输出错")
	// })
})()