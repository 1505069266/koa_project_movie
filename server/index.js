const Koa = require("koa")
const app = new Koa();
const views = require("koa-views")
const { resolve } = require('path')
const { connect,initSchemas } = require('./database/init')

;(async ()=>{
	await connect()

	initSchemas()


	require('./tasks/movie')
	// const Movie = mongoose.model('Movie')

	// const movies = await Movie.find({})

	// console.log(movies);
})()

app.use(views(resolve(__dirname, './views'),{
	extension: 'ejs'
}))
app.use(async (ctx,next)=>{
	await ctx.render('index', {
		you:'傻逼',
		me: 'shuaige',
		name: '朱晓乐'
	})
})

app.listen(3000)