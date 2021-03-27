var http =require('http');

http.createServer(function (req, res){
    res.end('xin chaoaaa');
}).listen(process.env.port || 3000);