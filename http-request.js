var http = require('http')

http.createServer(
    function(request, response){
        response.writeHead(200, {'content-type': 'text/html'})
        response.end('<b><i>Hello World</i></b>')
    }   
).listen(80)