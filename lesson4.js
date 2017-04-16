var fs = require('fs');
function lines (){
fs.readFile(process.argv[2], function doneReading(err, fileContents){

    var split = fileContents.toString().split("\n").length;
    console.log(split - 1);
});
}
lines();
