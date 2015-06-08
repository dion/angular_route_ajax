var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('test.json');

http.createServer(function (req, res) {
 //res.header("Access-Control-Allow-Origin", "*");
 //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.writeHead(200, {
	'Content-Type': 'text/plain',
	'Access-Control-Allow-Origin': '*'		
  });
  res.end(index);
}).listen(9615);
