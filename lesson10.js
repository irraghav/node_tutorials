var net = require("net");
function now(){
  var d= new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var minutes = d.getMinutes();
  if(month < 10){
    month = "0" + month;
  }

  if(day < 10){
    day = "0"+ day;
  }

    if(minutes < 10){
      minutes = "0"+ minutes;
    }

    var date = d.getFullYear() + "-" + month + "-" + day + " " + d.getHours() + ":" + minutes;

    return date;
}
var server = net.createServer(function(socket){

    socket.write(now() + "\n");
    socket.end();
});
server.listen(process.argv[2]);

//var sock = Socket();
//sock.connect(process.argv[2]);
//sock.end(now()+);
