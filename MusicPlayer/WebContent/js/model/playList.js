define(function(require) {
    var PlayListView = require("view/playListView"),
        Controller = require("controller/controller");
   
    var PlayList = function (musicIdList, occurredByDbClick) {
	var defaultPlayListName = "PlyaList" + (Controller.getCurPlayListNum() + 1);
	
	this.name = defaultPlayListName;
	this.musicIdList = musicIdList;
	
	if (occurredByDbClick) {
	    Controller.setCurPlayList(this.name);
	}
	
	new PlayListView(this.name, this.musicIdList);
    };
    
    return PlayList;
});
