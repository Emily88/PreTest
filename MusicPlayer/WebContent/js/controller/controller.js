define(function(require) {
    var StatusInterface = require("controller/statusInterface");

    return {
	updateSelection : function(key, checked) {
	    StatusInterface.updateSelection(key, checked);
	},

	musicStart : function(id, playListName) {
	    var musicStartEvt = new CustomEvent("musicStart");

	    StatusInterface.setCurMusicId(id, playListName);
	    document.body.dispatchEvent(musicStartEvt, id);

	    if (!playListName) {
		// 음원목록에 있는 음악을 틀 경우
		if (StatusInterface.isInPlayList(id)) {
		    // playlist를 찾는다.
		} else {
		    // playlist에 속하지 않으면 playList만든다.
		    this.dispatchMakePlayListEvt(id);
		}
	    }
	},

	dispatchMakePlayListEvt : function(id) {
	    var makePlayListEvt = new CustomEvent("makePlayListEvt");

	    document.body.dispatchEvent(makePlayListEvt, id);
	},

	getCurPlayListNum : function() {
	    return StatusInterface.getCurPlayListNum();
	},

	getPlayListNames : function() {
	    return StatusInterface.getPlayListNames();
	},

	setCurPlayList : function(curPlayListName) {
	    StatusInterface.setCurPlayList(curPlayListName);
	},

	insertPlayList : function(name, idList, isDelete) {
	    var updateListViewEvt = new CustomEvent("updateListViewEvt");
	    
	    StatusInterface.insertPlayList(name, idList, isDelete);
	    document.body.dispatchEvent(updateListViewEvt, name);
	},

	deletePlayList : function(name, idList, isDelete) {
	    StatusInterface.deletePlayList(name);
	}
    }
});