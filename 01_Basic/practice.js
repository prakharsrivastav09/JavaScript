var http = require('http');

//create a server object
http.createServer(function(req,res){
    res.write('Okk');
    res.end();
}).listen(8080);