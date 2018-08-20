define(function(require) {
	/***************************************************************************
	 * import
	 **************************************************************************/
    var MusicView = require("view/musicView");

	/***************************************************************************
	 * private variables
	 **************************************************************************/;
	
	/**************************
	 * constructor
	 **************************/
	var Music = function(attributes, id) {
		this.model = attributes;
		
		new MusicView(this.model, id);
	}
	
	Music.prototype.getTitle = function() {
	    return this.model.title;
	};
	
	Music.prototype.getTime = function() {
	    return this.model.time;
	};
	
	return Music;
});