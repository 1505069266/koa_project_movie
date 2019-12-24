const Koa = require('koa');
const app = new Koa();

app.proxy = true;
app.keys = ['im a newer secret', 'i like turtle'];

//使用logger中间件
app.use(async (ctx,next)=>{
	await next();
	const rt = ctx.response.get("X-Response-Time");
	console.log(`${ctx.method},${ctx.url}-${rt}`);
})

app.use(async (ctx,next)=>{
	await next();
	ctx;//这是context
	ctx.request;//这是Koa  Respuest
	ctx.response;//这是Koa  response
	// console.log(ctx);
	console.log(ctx.request);
	console.log(ctx.response);
	console.log(ctx.state)
	console.log(ctx.cookies.get('name'))//获取客户端的cookie值
	ctx.cookies.set('age','18')//设置客户端的cookie值
})

//使用x-response-time中间件
app.use(async (ctx,next)=>{
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time',`${ms}ms`)
})

//response
app.use(async ctx=>{
	ctx.cookies.set('name', 'tobi', { signed: true });
	ctx.body = "Hello World!!!!"
})

app.listen(3000)