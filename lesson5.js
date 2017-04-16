var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = process.argv[3] || "txt";
ext = "." + ext;
fs.readdir(folder, function(err,data){
  for(var i=0; i < data.length; i++){
    var p = path.extname(data[i]);
    if(p == ext){
      console.log(data[i]);
    }
  }
});
