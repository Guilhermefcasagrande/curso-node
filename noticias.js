var http = require('http');

http.createServer(function(req, res){
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end('<html><body>Notícias de tcnologia</body></html>');
    } else if(categoria == '/moda'){
        res.end('<html><body>Notícias de moda</body></html>');
    } else if(categoria == '/beleza'){
        res.end('<html><body>Notícias de beleza</body></html>');
    } else {
        res.end('<html><body>Portal de notícias</body></html>');
    }
}).listen(3000);