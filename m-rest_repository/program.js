var express = require("express"),
    app     = express()
 

var http = require('http');


function getTestPersonaLoginCredentials(url,path, callback) {

    return http.get({
        host: url,
        path: path
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            callback({
                email: parsed.email,
                password: parsed.pass
            });
        });
    });

}

getTestPersonaLoginCredentials("desi-tashan.com",
	"/pw/1803789-15th-september-2015-mere-angne-mein-part1/1803789-1803790-1803791-1803792-1803793/1/",
	function(data){
		console.log(data);

});