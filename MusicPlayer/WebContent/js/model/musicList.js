define(function(require) {
	/***************************************************************************
	 * import
	 **************************************************************************/
	var Const = require("commonConstants"), 
	Music = require("model/music"),
	MusicListView = require("view/musicListView");

	/***************************************************************************
	 * private variables
	 **************************************************************************/
	var _musicModelList = [];
	var MusicList = {
		initialize : function() {
			for (var key in Const.musicInfoMap) {
			    _musicModelList.push(new Music(Const.musicInfoMap[key], key));
			}
			
			MusicListView.initialize();
		}
	}

	return MusicList;
});
