var Readable = require('stream').Readable;
var rs = Readable();

//The fromCharCode() method converts Unicode values into characters.

var c = 97;
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);