define(function(require) {
    var MusicView = require("view/musicView"),
    Const = require("commonConstants"),
    Controller = require("controller/controller");
    
    var listViewEl = document.getElementsByClassName("listView")[0], 
    tapEl = document.getElementsByClassName("tap")[0],
    musicInfoMap = Const.musicInfoMap;
    
    var PlayListView = function (name, idList) {
	this.name = name;
	this.generateDom(name, idList);
	
	Controller.insertPlayList(name, idList);
    };
    
    PlayListView.prototype.generateDom = function(playListName, musicIdList) {
	var parser = new DOMParser(), 
	domString = "<div class='"+ playListName +"'><div class='playListView'></div></div>",
	domElements = parser.parseFromString(domString, "text/html"),
	tapDomString = "<div class='" + playListName + "'>" + playListName + "</div>",
	tapElement = parser.parseFromString(tapDomString, "text/html");
	
	this.viewEl = domElements.body.firstElementChild;
	
	listViewEl.appendChild(this.viewEl);
	tapEl.appendChild(tapElement.body.firstElementChild);
	
	musicIdList.forEach(function(id) {
	    new MusicView(musicInfoMap[id], id, this.viewEl.getElementsByClassName("playListView")[0], this.name);
	}, this);
    };
   
    return PlayListView;
})
