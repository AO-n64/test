var io = require('socket.io-client');
var socket = io('http://172.16.2.101:3000');
//var socket = io('http://192.168.11.15:3000');

var fs = require('fs');

// Raspberry Pi GPIOの21番ピンを入力モードに設定する
fs.writeFileSync('/sys/class/gpio/export', 4);
fs.writeFileSync('/sys/class/gpio/gpio4/direction', 'in');


socket.on('connect', function () {
    socket.emit("message", 'start');

    setInterval(function() {
      var value = fs.readFileSync('/sys/class/gpio/gpio4/value', 'ascii');
      var data = value.toString() // Bufferを文字列に変換
                .split('\n') // 改行コードで分割
                
      console.log( data[0] );
      socket.emit("data", data[0]);
    }, 100);



});

