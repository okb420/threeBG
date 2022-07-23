var static = require('node-static');
// var fs = require('fs');
var file = new static.Server('./public');

// const options = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response, (e, res) => {
            if (request.url == '/') {
                file.serveFile('/iframe.html', 200, {}, request, response);
            }
        });
    }).resume();
}).listen(3000);
