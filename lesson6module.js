var fs = require('fs');
var path = require('path');
module.exports = function(folder, ext, callback){
  ext = "."+ ext;
  fs.readdir(folder, function(err,data){
    var filenames = [];
    if(err){
      return callback(err);
    }
    else{
      for(var i=0; i < data.length; i++){
        var p = path.extname(data[i]);
        if(p == ext){
          filenames.push(data[i]);
        }
      }
      callback(null,filenames);
    }
  });
}
