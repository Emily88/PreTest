define(function(require) {
	/*******************************
	 * import
	 ******************************/
	var MusicList = require("model/musicList"),
	PlayView = require("view/playView"),
	StatusInterface = require("controller/statusInterface");
	
	/*******************************
	 * private variables
	 ******************************/
	var App = function () {
		
	};
	
	App.prototype.initialize = function () {
		MusicList.initialize();
		PlayView.initialize();
		StatusInterface.initialize();
	};
		
	return App;
})
