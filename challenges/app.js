var express = require('express');
var client = require('twilio')('ACdcbc978cc4ccab97d42e78746ab84286', '6addc9603fbb8087559a529996dc789a');

var app = express();
var port = 2001;


var x = 1;

app.get('/', function(req, res){

    var kanyeWestCrap = [
        "When I think of competition it's like I try to create against the past."
        ,"My greatest pain in life is that I will never be able to see myself perform live."
        ,"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. "
        ,"If you don't make Christmas presents, meaning making something that's so emotionally connected to people, don't talk to me."
        ,"Nothing in life is promised except death. Know your worth!"
        ,"If you admire somebody, you should go ahead and tell them. People never get the flowers while they can still smell them."
        ,"Someone will always be prettier. Someone will always be smarter. Someone will always be younger. But they will never be you."
        ,"I'm so gifted at findin' what I don't like the most."
    ];

    Array.prototype.randomElement = function() {
        return this[Math.floor(Math.random() * this.length)];
    }

    var randomKanyeWestCrap = kanyeWestCrap.randomElement();

    client.sendSms({

        to:'+19173650744', 
        from: '+19175255330', 
        body: randomKanyeWestCrap 

    }, function(err, responseData) { 

        if (!err) { 
            console.log(responseData.from); 
            console.log(responseData.body); 
        }
    });

    res.send('d octor is being text now.... you are '+x+' in line.');
    x++;
});

app.listen(port);
console.log('Listening on port ' + port + '...');
