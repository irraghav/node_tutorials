var mod = require('./lesson6module.js')

var folder = process.argv[2];
var ext = process.argv[3] || "txt";
function callb(err,file){
  if(err){console.log(err);}
  else{
    for (var i = 0; i < file.length; i++) {
          console.log(file[i]);
      }

  }
}
mod(folder, ext,callb);
