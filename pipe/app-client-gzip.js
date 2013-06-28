//Now our file is compressed for browsers that support gzip or deflate! We can just let oppressor handle all that content-encoding stuff.
//
//    Once you learn the stream api, you can just snap together these streaming modules like lego bricks or garden hoses instead of having to remember how to push data through wonky non-streaming custom APIs.
//
//    Streams make programming in node simple, elegant, and composable.      - @substack

var http = require('http');
var fs = require('fs');
var oppressor = require('/usr/local/share/npm/lib/node_modules/oppressor');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(oppressor(req)).pipe(res);
});
server.listen(8000);

console.log('server.listen(8000)')