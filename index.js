var http =require('http');

http.createServer(function (req, res){
    res.end('xin chaoaaa');
}).listen(process.env.PORT || 3000);