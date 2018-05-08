var moveFlag = false;
var ret = true;


//フルスクリーンに切り替え
function enterFullscreen() {
	var x = document.getElementById("main");
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

(function() {
        window.addEventListener("devicemotion", function(e){
          //加速度
         var acc_g = e.accelerationIncludingGravity;
          if(ret){
          	if(acc_g.z<-8){
          		ret = false;
	          	if(!moveFlag){
	          		$.get('../move.php',{
				          'stat': '1'
				        }
				      );
	          		moveFlag = true;
	          	}else{
	          		$.get(
				        '../move.php',
				        {
				          'stat': '0'
				        }
				      );
	          		moveFlag = false;
	          	}
	         }
          }else{
          	if(acc_g.z>-4){
          		ret = true;

          	}
          }
          
        });
  })();


$(window).on('load resize', function(){

});

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