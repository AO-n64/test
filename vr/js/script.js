
if(window.devicePixelRatio)
	ratio = window.devicePixelRatio;

var winW = $(window).width();
var winH = $(window).height();


//キャンバス用意
var canvas = document.getElementById('canvas');  //マップ表示レイヤーキャンバス
var ctx = canvas.getContext('2d');


$(document.body).css("margin","0")


$(window).on('load resize', function(){

		//パソコン用画面と、スマホ画面切り替え

		
$( '#canvas' ).get( 0 ).width = winW;
$( '#canvas' ).get( 0 ).height = winH;
		
});

//ページが読み込まれたら発動
onload = function() {
	//createImageLayer();
};



//カメラ画像取得

var imageNr = 0; // Serial number of current image
var finished = new Array(); // References to img objects which have finished downloading
var paused = false;

var img;
function createImageLayer() {
  img = new Image();
  img.style.position = "absolute";
  img.style.zIndex = -1;
  //img.onload = imageOnload;
  //img.onclick = imageOnclick;
  img.src = "http://172.16.2.109:8080/?action=snapshot&n=" + (++imageNr);


  
  // var webcam = document.getElementById("webcam");
  // webcam.insertBefore(img, webcam.firstChild);
  var webcam = document.getElementById("webcam");
  webcam.insertBefore(img, webcam.firstChild);
}

// Two layers are always present (except at the very beginning), to avoid flicker
function imageOnload() {
  this.style.zIndex = imageNr; // Image finished, bring to front!
  while (1 < finished.length) {
    var del = finished.shift(); // Delete old image(s) from document
    del.parentNode.removeChild(del);
  }
  finished.push(this);
  if (!paused) createImageLayer();
}

function imageOnclick() { // Clicking on the image will pause the stream
  paused = !paused;
  if (!paused) createImageLayer();
}

	


	

		//フルスクリーンに切り替え
	function enterFullscreen() {
		var x = document.getElementById("canvas");
		if (x.webkitRequestFullScreen) {
			x.webkitRequestFullScreen();
		} else if (x.mozRequestFullScreen) {
			x.mozRequestFullScreen();
		} else {
			x.requestFullScreen();
		}
	}
	//フルスクリーンを解除
	function exitFullscreen() {
		if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else {
			document.exitFullscreen();
		}
	}


	//タッチイベント取得
	// タッチイベントに対応している
	if(window.TouchEvent){

		// イベントリスナーに対応している
		if(document.addEventListener){
			function TouchEventFunc(e){
					enterFullscreen();
				}

			// タッチを開始すると実行されるイベント
			document.addEventListener("touchstart",TouchEventFunc);
			// タッチしたまま平行移動すると実行されるイベント
			//document.addEventListener("touchmove",TouchEventFunc);
			// タッチを終了すると実行されるイベント
			//document.addEventListener("touchend",TouchEventFunc);
		}
	}


	//キー情報受け取り
	document.onkeydown = function getkeys(event){
		// keys[event.keyCode] = true;		//押したキーのフラグを立てる
		// tvOn = true;

		enterFullscreen();

	}
	document.onkeyup = function playermovestop(event){
		// keys[event.keyCode] = false;  //離したキーのフラグを消す	
	}

	img = new Image();
  		img.style.position = "absolute";
  		img.style.zIndex = -1;

	setInterval("update()",1);
	function update(){

		
		//img.onload = imageOnload;
		//img.onclick = imageOnclick;
		img.src = "http://172.16.2.109:8080/?action=snapshot&n=" + (++imageNr);
		console.log(img);

		//ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, winW,winH/2);
		ctx.drawImage(img, 0, winH/2, img.width, img.height, 0, 0, winW,winH);

		//ctx2.clearRect(0,0,$( window ).width()*2,$( window ).height()*2);

		

		//ctx.fillStyle = "#555555";  //塗りつぶし色
   		//ctx.fillRect(0, 0, winW/2, winH); //背景を黒に塗りつぶし
   		//ctx.fillStyle = "#666666";  //塗りつぶし色
   		//ctx.fillRect(winW/2, 0, winW/2, winH); //背景を黒に塗りつぶし

   		

		// ctx2.beginPath();
		// ctx2.fillStyle = "#555555";  //塗りつぶし色
  // 		ctx2.fillRect(0, 0, 1680, 980); //背景を黒に塗りつぶし

  // 		console.log(ctx2);

		// ctx2.fillStyle = "black";
  // 		ctx2.font = "80pt misaki";
  // 		ctx2.fillText("あほの部屋", 25*2, 64*2+2+16);
  // 		ctx2.fillStyle = "#40e0d0";
  // 		ctx2.font = "80pt misaki";
  // 		ctx2.fillText("あほの部屋", 24*2, 64*2+16);

  // 		ctx2.fillStyle = "black";
  // 		ctx2.font = "40pt misaki";
  // 		ctx2.fillText("- 準備中 -", 80*2, 64*3+2+16);
  // 		ctx2.fillStyle = "#40e0d0";
  // 		ctx2.font = "40pt misaki";
  // 		ctx2.fillText("- 準備中 -", 80*2, 64*3+16);

  // 		ctx2.drawImage(player, psx*4, psy*4, 128, 128, px, py, 128, 128); //プレイヤー表示
  		

		
	}

	

	$(function(){

		// $("canvas").mousemove(function(e) {
		// 	mouseX = e.clientX;
		// });

		// $('canvas').click(function( event ) {
	 //  		$('#boxA').hide().animate({
		//          width: "0px",
		//          height: "0px"
		//     }, 0);
		//     $('#boxB').hide().animate({
		//          width: "0px",
		//          height: "0px"
		//     }, 0);
		// });

		// $("#link li:nth-child(1)").hover( 
		// 	function () {
  //   			$(this).text(">このサイトについて");
  // 			},
  // 			function () {
  //   			$(this).text("このサイトについて");
  // 			}
  // 		);
  // 		$('#link li:nth-child(1)').click(function( event ) {
	 //  		$('#boxA').show().animate({
		//          width: "80%",
		//          height: "80%"
		//     }, 500);
		// });
  			
  // 		$("#link li:nth-child(2)").hover( 
		// 	function () {
  //   			$(this).text(">ゲーム置き場");
  // 			},
  // 			function () {
  //   			$(this).text("ゲーム置き場");
  // 			}
  // 		);
  // 		$('#link li:nth-child(2)').click(function( event ) {
	 //  		$('#boxB').show().animate({
		//          width: "80%",
		//          height: "80%"
		//     }, 500);
		// });


  		
  // 		$('.close').click(function( event ) {
	 //  		$('#boxA').hide().animate({
		//          width: "0px",
		//          height: "0px"
		//     }, 0);
		//     $('#boxB').hide().animate({
		//          width: "0px",
		//          height: "0px"
		//     }, 0);
		// });

		// $('#topics').fitText(2);
		// $('#link ul li').fitText(1.2);

	});

	