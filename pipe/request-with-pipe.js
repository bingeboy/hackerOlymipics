//get image with request and pipe it to client.

var http = require('http');
var request = require('/usr/local/share/npm/lib/node_modules/request');


var server = http.createServer(function (req, res) {
    request.get('http://www.1up.com/images/Elements/carouselNav.png').pipe(res);
});
server.listen(8000);

console.log('server.listen(8000)')