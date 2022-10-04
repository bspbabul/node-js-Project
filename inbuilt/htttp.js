let http = require('http');

var server = http.createServer(function(req,res) {
    
        res.write('<h1>create server with </h1>');
        res.end();
    });


server.listen(3489);
