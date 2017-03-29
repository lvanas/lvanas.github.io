window.onload = function(){
	var oV = document.getElementById("v1");
	
	//进度条
	var speedBox = document.querySelector(".speed");
	var speed_buffer = speedBox.querySelector(".speed_buffer");
	var speed_this = speedBox.querySelector(".speed_this");
	var speed_btn = speed_this.querySelector(".button");
	var maxW = speedBox.offsetWidth - speed_btn.offsetWidth;

	//缓冲 oV.buffered.end(0);
	oV.onprogress = function(){
		var scale =  oV.buffered.end(0)/oV.duration;
		speed_buffer.style.width = scale*100 + "%" 
	};
			
	speed_btn.onmousedown = function(ev){
		oV.pause();
		var disX = ev.clientX - speed_btn.offsetLeft; 
		document.onmousemove = function(ev){
			var l = ev.clientX - disX;
			
			if(l < 0){
				l = 0;
			} else if(l > maxW){
				l = maxW;
			}
			
			var scale = l/maxW;
			speed_this.style.width = scale*100 + "%"; 
			
			//speed_btn.style.left = l + "px"; 
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null; 
			
			var scale = speed_btn.offsetLeft/maxW;
			oV.currentTime = scale*oV.duration; 
			speed_this.style.width = scale*100 + "%"; 
			oV.play();
		};	 
		return false;
	};
	
	
	//时间显示 
	var curTime = document.getElementById("curTime");
	var totalTime = document.getElementById("totalTime");
	oV.ontimeupdate = function(){
		
		//console.log(this.currentTime,this.duration);	
		curTime.innerHTML = formatTime(this.currentTime);
		totalTime.innerHTML = formatTime(this.duration);
		
		var scale = this.currentTime/this.duration;
		speed_this.style.width = scale*100 + "%";
	};
	
function formatTime(time){
	var iM = parseInt(time/60);
	var iS = parseInt(time%60);
	return addZero(iM)+":"+addZero(iS);
}
function addZero(n){
	return (n < 10 ? "0":"") + n;
}	
	
	
	//音量
	var volumeBox = document.querySelector(".volume");
	var volume_this = volumeBox.querySelector(".volume_this");
	var button = volumeBox.querySelector(".button"); 
	
	button.onmousedown = function(ev){
		var disX = ev.clientX - button.offsetLeft; 
		document.onmousemove = function(ev){
			var l = ev.clientX - disX;
			var maxW = volumeBox.offsetWidth - button.offsetWidth;
			if(l < 0){
				l = 0;
			} else if(l > maxW){
				l = maxW;
			}
			
			var scale = l/maxW;
			volume_this.style.width = scale*100 + "%";
			oV.volume = scale;
			
			button.style.left = l + "px"; 
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null; 
		};	 
		return false;
	};
	  
	
	var stop = document.getElementById("stop");
	var play = document.getElementById("play");
	var pause = document.getElementById("pause"); 
	// 播放相关
	stop.onclick = function(){
		oV.pause();
		oV.currentTime = 0;	
		pause.style.display = "none";
		play.style.display = "block";
	};
	
	play.onclick = function(){
		oV.play();	
		this.style.display = "none";
		pause.style.display = "block";
	};
	
	pause.onclick = function(){
		oV.pause();	
		this.style.display = "none";
		play.style.display = "block";
	};

};