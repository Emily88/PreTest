define(function(require) {
    /***************************************************************************
     * import
     **************************************************************************/
    var Const = require("commonConstants");
    /***************************************************************************
     * private variables
     **************************************************************************/
    var curMusicId, playListNameArr, lastPlayListName, curPlayListName, selection, playListMap,
    _musicInfoMap = Const.musicInfoMap;

    return {
	initialize : function() {
	    curMusicId = null;
	    playListNameArr = [];
	    curPlayListName = null;
	    lastPlayListName = null;
	    selection = [];
	    playListMap = {};
	},
	
	updateSelection : function(id, isSelected) {
	    var index;
	    if (isSelected) {
		selection.push(id);
	    } else {
		index = selection.indexOf(id);
		selection.slice(index, 1);
	    }
	},

	setCurMusicId : function(id, playListName) {
	    curMusicId = id;
	    
	    if (playListName) {
		curPlayListName = playListName;
	    }

	},
	getCurMusicId : function() {
	    return curMusicId;
	},
	
	setCurPlayList: function (playListName) {
	    lastPlayListName = curPlayListName;
	    curPlayListName = playListName;
	},

	getCurPlayListNum : function() {
	    return playListNameArr.length;
	},

	getPlayListNames : function() {
	    return playListNameArr;
	},

	insertPlayList : function(playListName, idList) {
	    playListNameArr.push(playListName);

	    playListMap.playListName = idList;
	},

	deletePlayList : function(playListName) {
	    var index = playListNameArr.indexOf(playListName);
	    playListNameArr.slice(index, 1);

	    delete playListMap.playListName;
	},

	isInPlayList : function(id) {
	    var playListName = null;
	    if (curPlayListName != null) {
		// curPlayList를 돌면서 찾는다.
	    } else {
		// curPlayList가 없다면 나머지 재생목록에서 찾는다.
		if (playListNameArr.length !== 0) {
		    // playListName

		}
	    }
	    return playListName
	}
    }
});