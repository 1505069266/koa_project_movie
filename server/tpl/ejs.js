module.exports = `
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap-grid.css" rel="stylesheet">
	<script src="https://cdn.bootcss.com/jquery/3.4.1/core.js"></script>
	<script src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js"></script>
	<title>Koa Server HTML</title>
	
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-8">
			  <h1>首页</h1>
			  <p><%= you %></p>
			  <p><%= me %></p>
			</div>
			<div class="col-md-4">
				静态HTML
			</div>
		</div>
		
	</div>
</body>
</html>
`
