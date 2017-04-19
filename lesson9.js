//var link =process.argv[2] ; //"http://www.google.com";
var bl = require('bl');
var http = require("http");
var max = 5;
var min = 2;
function call(val){
  http.get(process.argv[val], function(response){
    response.pipe(bl(function(err,data){
      var d =data.toString();
      console.log(data.toString());
    }));
    response.on("end",function(d){
      val++;
      if(val < max){
        call(val);
      }
    })
  });
}
call(min);
