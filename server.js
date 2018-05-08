var socketio = require("socket.io");
var io = socketio.listen(3000);

var exec = require('child_process').exec;
 


var fs = require('fs');
//fs.writeFileSync('/sys/class/gpio/export', '15');
//fs.writeFileSync('/sys/class/gpio/export', '14');
//fs.writeFileSync('/sys/class/gpio/gpio15/direction', 'out');
//fs.writeFileSync('/sys/class/gpio/gpio14/direction', 'out');
exec('gpio -g mode 15 out');
exec('gpio -g mode 14 out');


console.log("start socket.io server.");
io.sockets.on("connection", function (socket) {
 console.log("user connect!")
 
 socket.on("data", function (data) {

 
  	if(data=="0"){
  		console.log("0 - false");
  		//fs.writeFileSync('/sys/class/gpio/gpio15/value', '0');
  		//fs.writeFileSync('/sys/class/gpio/gpio14/value', '0');
  		exec('gpio -g write 15 1');
  		exec('gpio -g write 14 0');
  	}else{
  		console.log("1 - true");
  		//fs.writeFileSync('/sys/class/gpio/gpio15/value', '1');
  		//fs.writeFileSync('/sys/class/gpio/gpio14/value', '0');
  		exec('gpio -g write 15 0');
  		exec('gpio -g write 14 0');
  	}
  

 });




});