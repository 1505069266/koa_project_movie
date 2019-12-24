const Koa = require("koa")
const app = new Koa();
const views = require("koa-views")
const { resolve } = require('path')

app.use(views(resolve(__dirname, './views'),{
	extension: 'ejs'
}))
app.use(async (ctx,next)=>{
	await ctx.render('index', {
		you:'傻逼',
		me: 'shuaige'
	})
})

app.listen(3000)