var http =require('http');

http.createServer(function (req, res){
    res.end('heloo ae minh la duc');
}).listen(process.env.PORT || 3000);