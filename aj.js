var http = require('http');

http.createServer(function (req, resh) {

    var qs = require("querystring");
    var http = require("https");

    var options = {
        "method": "POST",
        "hostname": "developer.api.autodesk.com",
        "port": null,
        "path": "/authentication/v1/authenticate",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "3c20a196-4011-068f-b020-5d1f137e8db2"
        }
    };
    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
            resh.writeHead(200, {'Content-Type': 'text/plain'});
            resh.end(body.toString());
        });

    });

    req.write(qs.stringify({
        client_id: '9n9kvDeyup3ZPusXCzxTHA9b7ZAVZuI5',
        client_secret: 'Uc618dd9a77a84d3',
        grant_type: 'client_credentials',
        scope: 'data:read'
    }));
    req.end();

}).listen(8080);