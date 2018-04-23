var http = require("http");

http.createServer(function (req, res) {

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var request = require("request")

    var url = "http://ec2-13-58-49-20.us-east-2.compute.amazonaws.com:8002/zmanim/31/35"

    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            res.write(JSON.stringify(body)) // Print the json response
            
    res.end();
        }
    })


}).listen(443);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');



