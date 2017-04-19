var link =; //"http://www.google.com";
var bl = require('bl');
var http = require("http");
http.get(link, function(response){
    response.setEncoding("utf8");
    response.pipe(bl(function(err,data){
        var d =data.toString();
        console.log(d.length);
        console.log(data.toString());
    }));
});
