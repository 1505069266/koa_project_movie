# koa_project_movie
koa搭建一个完整电影项目
## Request
```
request.header
请求标头对象。这与 node http.IncomingMessage 上的 headers 字段相同

request.header=
设置请求标头对象。

request.headers
请求标头对象。别名为 request.header.

request.headers=
设置请求标头对象。别名为 request.header=.

request.method
请求方法。

request.method=
设置请求方法，对于实现诸如 methodOverride() 的中间件是有用的。

request.length
返回以数字返回请求的 Content-Length，或 undefined。

request.url
获取请求 URL.

request.url=
设置请求 URL, 对 url 重写有用。

request.originalUrl
获取请求原始URL。

request.origin
获取URL的来源，包括 protocol 和 host。
ctx.request.origin
// => http://example.com

request.href
获取完整的请求URL，包括 protocol，host 和 url。
ctx.request.href;
// => http://example.com/foo/bar?q=1

request.path
获取请求路径名。

request.path=
设置请求路径名，并在存在时保留查询字符串。

request.querystring
根据 ? 获取原始查询字符串.

request.querystring=
设置原始查询字符串。

request.search
使用 ? 获取原始查询字符串。

request.search=
设置原始查询字符串。

request.host
获取当前主机（hostname:port）。当 app.proxy 是 true 时支持 X-Forwarded-Host，否则使用 Host。

request.hostname
存在时获取主机名。当 app.proxy 是 true 时支持 X-Forwarded-Host，否则使用 Host。
如果主机是 IPv6, Koa 解析到 WHATWG URL API, 注意 这可能会影响性能。

request.URL
获取 WHATWG 解析的 URL 对象。

request.type
获取请求 Content-Type 不含参数 "charset"。
const ct = ctx.request.type;
// => "image/png"

request.charset
在存在时获取请求字符集，或者 undefined：
ctx.request.charset;
// => "utf-8"

request.query
获取解析的查询字符串, 当没有查询字符串时，返回一个空对象。请注意，此 getter _不_ 支持嵌套解析。
{
  color: 'blue',
  size: 'small'
}

request.query=
将查询字符串设置为给定对象。 请注意，此 setter _不_ 支持嵌套对象。
ctx.query = { next: '/login' };

request.fresh
检查请求缓存是否“新鲜”，也就是内容没有改变。此方法用于 If-None-Match / ETag, 和 If-Modified-Since 和 Last-Modified 之间的缓存协商。 在设置一个或多个这些响应头后应该引用它。
// 新鲜度检查需要状态20x或304
ctx.status = 200;
ctx.set('ETag', '123');
// 缓存是好的
if (ctx.fresh) {
  ctx.status = 304;
  return;
}
// 缓存是陈旧的
// 获取新数据
ctx.body = await db.find('something');

request.stale
相反与 request.fresh.

request.protocol
返回请求协议，“https” 或 “http”。当 app.proxy 是 true 时支持 X-Forwarded-Proto。

request.secure
通过 ctx.protocol == "https" 来检查请求是否通过 TLS 发出。

request.ip
请求远程地址。 当 app.proxy 是 true 时支持 X-Forwarded-Proto。

request.ips
当 X-Forwarded-For 存在并且 app.proxy 被启用时，这些 ips 的数组被返回，从上游 - >下游排序。 禁用时返回一个空数组。

request.subdomains
将子域返回为数组。
子域是应用程序主域之前主机的点分隔部分。默认情况下，应用程序的域名假定为主机的最后两个部分。这可以通过设置 app.subdomainOffset 来更改。
例如，如果域名为“tobi.ferrets.example.com”：
如果 app.subdomainOffset 未设置, ctx.subdomains 是 ["ferrets", "tobi"]. 如果 app.subdomainOffset 是 3, ctx.subdomains 是 ["tobi"].

request.is(types...)
检查传入请求是否包含 Content-Type 头字段， 并且包含任意的 mime type。 如果没有请求主体，返回 null。 如果没有内容类型，或者匹配失败，则返回 false。 反之则返回匹配的 content-type。
// 使用 Content-Type: text/html; charset=utf-8
ctx.is('html'); // => 'html'
ctx.is('text/html'); // => 'text/html'
ctx.is('text/*', 'text/html'); // => 'text/html'
// 当 Content-Type 是 application/json 时
ctx.is('json', 'urlencoded'); // => 'json'
ctx.is('application/json'); // => 'application/json'
ctx.is('html', 'application/*'); // => 'application/json'
ctx.is('html'); // => false

request.accepts(types)
检查给定的 type(s) 是否可以接受，如果 true，返回最佳匹配，否则为 false。 type 值可能是一个或多个 mime 类型的字符串，如 application/json，扩展名称如 json，或数组 ["json", "html", "text/plain"]。

request.acceptsEncodings(encodings)
检查 encodings 是否可以接受，返回最佳匹配为 true，否则为 false。 请注意，您应该将identity 作为编码之一！

request.acceptsCharsets(charsets)
检查 charsets 是否可以接受，在 true 时返回最佳匹配，否则为 false。

request.acceptsLanguages(langs)
检查 langs 是否可以接受，如果为 true，返回最佳匹配，否则为 false。

request.idempotent
检查请求是否是幂等的。

request.socket
返回请求套接字。

request.get(field)
返回请求标头。不区 field 的分大小写.
```
## response
```JavaScript
response.header
响应标头对象。

response.headers
响应标头对象。别名是 response.header。

response.socket
响应套接字。 作为 request.socket 指向 net.Socket 实例。

response.status
获取响应状态。默认情况下，response.status 设置为 404 而不是像 node 的 res.statusCode 那样默认为 200。

response.status=
通过数字代码设置响应状态：
100 "continue"
101 "switching protocols"
102 "processing"
200 "ok"
201 "created"
202 "accepted"
203 "non-authoritative information"
204 "no content"
205 "reset content"
206 "partial content"
207 "multi-status"
208 "already reported"
226 "im used"
300 "multiple choices"
301 "moved permanently"
302 "found"
303 "see other"
304 "not modified"
305 "use proxy"
307 "temporary redirect"
308 "permanent redirect"
400 "bad request"
401 "unauthorized"
402 "payment required"
403 "forbidden"
404 "not found"
405 "method not allowed"
406 "not acceptable"
407 "proxy authentication required"
408 "request timeout"
409 "conflict"
410 "gone"
411 "length required"
412 "precondition failed"
413 "payload too large"
414 "uri too long"
415 "unsupported media type"
416 "range not satisfiable"
417 "expectation failed"
418 "I'm a teapot"
422 "unprocessable entity"
423 "locked"
424 "failed dependency"
426 "upgrade required"
428 "precondition required"
429 "too many requests"
431 "request header fields too large"
500 "internal server error"
501 "not implemented"
502 "bad gateway"
503 "service unavailable"
504 "gateway timeout"
505 "http version not supported"
506 "variant also negotiates"
507 "insufficient storage"
508 "loop detected"
510 "not extended"
511 "network authentication required"

response.message
获取响应的状态消息. 默认情况下, response.message 与 response.status 关联.

response.message=
将响应的状态消息设置为给定值。

response.length=
将响应的 Content-Length 设置为给定值。

response.length
以数字返回响应的 Content-Length，或者从ctx.body推导出来，或者undefined。

response.body
获取响应主体。

response.body=
将响应体设置为以下之一：
string 写入
Buffer 写入
Stream 管道
Object || Array JSON-字符串化
null 无内容响应
如果 response.status 未被设置, Koa 将会自动设置状态为 200 或 204。
Koa 没有防范作为响应体的所有内容 - 函数没有有意义地序列化，返回布尔值可能会根据您的应用程序而有意义。并且当错误生效时，它可能无法正常工作 错误的属性无法枚举。 我们建议在您的应用中添加中间件，以确定每个应用的正文类型。 示例中间件可能是：
app.use(async (ctx, next) => {
  await next()
  ctx.assert.equal('object', typeof ctx, 500, '某些开发错误')
})

String
Content-Type 默认为 text/html 或 text/plain, 同时默认字符集是 utf-8。Content-Length 字段也是如此。

Buffer
Content-Type 默认为 application/octet-stream, 并且 Content-Length 字段也是如此。

Stream
Content-Type 默认为 application/octet-stream。
每当流被设置为响应主体时，.onerror 作为侦听器自动添加到 error 事件中以捕获任何错误。此外，每当请求关闭（甚至过早）时，流都将被销毁。如果你不想要这两个功能，请勿直接将流设为主体。例如，当将主体设置为代理中的 HTTP 流时，你可能不想要这样做，因为它会破坏底层连接。
const PassThrough = require('stream').PassThrough;
app.use(async ctx => {
  ctx.body = someHTTPStream.on('error', ctx.onerror).pipe(PassThrough());
});

Object
Content-Type 默认为 application/json. 这包括普通的对象 { foo: 'bar' } 和数组 ['foo', 'bar']。

response.get(field)
不区分大小写获取响应标头字段值 field。
const etag = ctx.response.get('ETag');

response.has(field)
如果当前在传出标头中设置了由名称标识的标头，则返回 true. 标头名称匹配不区分大小写.
const rateLimited = ctx.response.has('X-RateLimit-Limit');

response.set(field, value)
设置响应标头 field 到 value:
ctx.set('Cache-Control', 'no-cache');

response.append(field, value)
用值 val 附加额外的标头 field。
ctx.append('Link', '<http://127.0.0.1/>');

response.set(fields)
用一个对象设置多个响应标头fields:
ctx.set({
  'Etag': '1234',
  'Last-Modified': date
});

response.remove(field)
删除标头 field。

response.type
获取响应 Content-Type 不含参数 "charset"。
const ct = ctx.type;
// => "image/png"

response.type=
设置响应 Content-Type 通过 mime 字符串或文件扩展名。
ctx.type = 'text/plain; charset=utf-8';
ctx.type = 'image/png';
ctx.type = '.png';
ctx.type = 'png';
注意: 在适当的情况下为你选择 charset, 比如 response.type = 'html' 将默认是 "utf-8". 如果你想覆盖 charset, 使用 ctx.set('Content-Type', 'text/html') 将响应头字段设置为直接值。

response.is(types...)
非常类似 ctx.request.is(). 检查响应类型是否是所提供的类型之一。这对于创建操纵响应的中间件特别有用。
例如, 这是一个中间件，可以削减除流之外的所有HTML响应。
const minify = require('html-minifier');
app.use(async (ctx, next) => {
  await next();
  if (!ctx.response.is('html')) return;
  let body = ctx.body;
  if (!body || body.pipe) return;
  if (Buffer.isBuffer(body)) body = body.toString();
  ctx.body = minify(body);
});

response.redirect(url, [alt])
执行 [302] 重定向到 url.
字符串 “back” 是特别提供Referrer支持的，当Referrer不存在时，使用 alt 或“/”。
ctx.redirect('back');
ctx.redirect('back', '/index.html');
ctx.redirect('/login');
ctx.redirect('http://google.com');
要更改 “302” 的默认状态，只需在该调用之前或之后分配状态。要变更主体请在此调用之后:
ctx.status = 301;
ctx.redirect('/cart');
ctx.body = 'Redirecting to shopping cart';

response.attachment([filename], [options])
将 Content-Disposition 设置为 “附件” 以指示客户端提示下载。(可选)指定下载的 filename 和部分 参数。

response.headerSent
检查是否已经发送了一个响应头。 用于查看客户端是否可能会收到错误通知。

response.lastModified
将 Last-Modified 标头返回为 Date, 如果存在。

response.lastModified=
将 Last-Modified 标头设置为适当的 UTC 字符串。您可以将其设置为 Date 或日期字符串。
ctx.response.lastModified = new Date();

response.etag=
设置包含 " 包裹的 ETag 响应， 请注意，没有相应的 response.etag getter。
ctx.response.etag = crypto.createHash('md5').update(ctx.body).digest('hex');

response.vary(field)
在 field 上变化。

response.flushHeaders()
刷新任何设置的标头，并开始主体。
```
