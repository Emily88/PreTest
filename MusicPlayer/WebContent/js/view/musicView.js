define(function(require) {
    /*************************************************
     * import
     *************************************************/
    var Const = require("commonConstants"),
    Controller = require("controller/controller");
    /***************************************************************************
     * private variables
     **************************************************************************/
    var _musicListViewEl = document.getElementsByClassName("musicListView")[0],
    _playListViewEl = document.getElementsByClassName("playListView")[0],
    _prevent = false, _timer = 0;
    /***************************************************************************
     * private functions
     **************************************************************************/
    /***************************************************************************
     * constructor
     **************************************************************************/
    var MusicView = function(model, id, targetNode, playListName) {
	this.id = id;
	this.title = model.title;
	this.time = model.time;
	
	if (playListName) {
	    this.playListName = playListName;
	}
	
	this.render(targetNode);
	this.registerEvt();
    }

    MusicView.prototype.render = function(targetNode) {
	var parser = new DOMParser(), 
	domString = "<div class='music'><input type='checkbox'></input><div>"
		+ this.title
		+ "</div><div>"
		+ this.time
		+ "</div></div>", 
	domElements = parser.parseFromString(domString, "text/html"),
	// 재생목록노드가 없다면 음원목록에 붙인다.
	targetNode = targetNode || _musicListViewEl;

	this.viewEl = domElements.body.firstElementChild;
	
	targetNode.appendChild(this.viewEl);
    }
    
    MusicView.prototype.registerEvt = function() {
	this.viewEl.addEventListener("click", this.onClickMusic.bind(this));
	this.viewEl.addEventListener("dblclick", this.onDblClickMusic.bind(this));
    }
    
    MusicView.prototype.onClickMusic = function (e) {
	var that = this;
	
	_timer = setTimeout(function() {
	    if (!_prevent) {
		that.doClickAction(e);
	    }
	    _prevent = false;
	}, 500);
    }
    
    MusicView.prototype.onDblClickMusic = function (e) {
	clearTimeout(_timer);
	_prevent = true;
	this.doDblClickAction(e);
    }
    
    MusicView.prototype.doClickAction = function () {
	var newBgColor, checked;

	if (this.viewEl.style.background === "") {
	    newBgColor = Const.selectedColor;
	    checked = true;
	} else {
	    newBgColor = "";
	    checked = false;
	}

	this.viewEl.style.background = newBgColor;
	this.viewEl.firstChild.checked = checked;
	
	//Controller.updateSelection(this.id, checked);
    }
    
   MusicView.prototype.doDblClickAction = function () {
       Controller.musicStart(this.id, this.playListName);
    }

    return MusicView;
});