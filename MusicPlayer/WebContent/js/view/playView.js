define(function(require) {
    var Const = require("commonConstants");
    
    var el = document.getElementById("play"), 
    playInfoElList = el.getElementsByClassName("playInfo")[0], 
    titleEl = playInfoElList.getElementsByClassName("title")[0],
    timeEl = playInfoElList.getElementsByClassName("time")[0],
    curProgressEl = playInfoElList.getElementsByClassName("curProgress")[0],
    manipulateBtnList = el.getElementsByClassName("manipulate")[0],
    prevBtnEl = manipulateBtnList.getElementsByClassName("prev")[0],
    playBtnEl = manipulateBtnList.getElementsByClassName("play")[0],
    stopBtnEl = manipulateBtnList.getElementsByClassName("stop")[0],
    nextBtnEl = manipulateBtnList.getElementsByClassName("next")[0],
    musicInfoMap = Const.musicInfoMap,
    _streaming = false, interval, _originalTime;
    
    function _startMusic(time) {
	_originalTime = time;
	_streaming = true;
	interval = setInterval(cb, 1000);
    }
    
    function cb() {
	if (_streaming) {
	    if(timeEl.innerHTML === "0") {
		_streaming = false;
		playNextMusic();
	    } else {
		timeEl.innerHTML -= 1 ;
		updateProgressBar((1-timeEl.innerHTML/_originalTime)*100 + "%");
	    }
	} else {
	    clearInterval(interval);
	}
    }
    
    function updateProgressBar(percent) {
	curProgressEl.style.width = percent;
    }
    
    function playNextMusic() {
	console.error("next music play");
    }
    
    return {
	initialize : function() {
	    document.body.addEventListener("musicStart", this.startMusic);    
	},

	startMusic : function() {
	    var id = arguments.callee.caller.arguments[0]
	    console.error("music start lets change status");
	    titleEl.innerHTML = "음악제목: " + musicInfoMap[ id ].title;
	    timeEl.innerHTML = musicInfoMap[ id ].time;
	    playBtnEl.innerHTML = "일시정지";
	    
	    _startMusic(musicInfoMap[ id ].time);
	}
    }
});