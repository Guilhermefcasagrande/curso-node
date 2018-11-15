var http = require('http');

http.createServer(function(req, res){
    res.end('<html><body>Portal de notícias</body></html>');
}).listen(3000);