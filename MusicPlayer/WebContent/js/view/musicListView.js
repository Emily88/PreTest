define(function(require) {
    /***************************************************************************
     * import
     */
    var Const = require("commonConstants"), PlayList = require("model/playList"), Controller = require("controller/controller");

    /***************************************************************************
     * private variables
     **************************************************************************/
    var _listView = document.getElementsByClassName("listView")[0],
    _musicListEl = _listView.getElementsByClassName("musicList")[0],
    _musicListViewEl = _musicListEl.getElementsByClassName("musicListView")[0],
    _manipulateBtns = _musicListEl.getElementsByTagName("button"),
    _makePlayListBtn = _manipulateBtns[0];
    _deleteBtn = _manipulateBtns[1],
    _tapEl = document.getElementsByClassName("tap")[0],
    musicInfoMap = Const.musicInfoMap;

    function onClickMakePlayList() {
	// 아래와 중복되므로 분리할 필요가 있음
	var checkBoxTagList = _musicListViewEl.getElementsByTagName("input"), count = 0;

	for (var i = 0; i < checkBoxTagList.length; i++) {
	    if (checkBoxTagList[i].checked) {
		++count;
	    }
	}

	if (!count) {
	    alert("재생목록을 만들 음악들을 선택해주세요!");
	} else {
	    makePlayList();
	}
    }

    function makePlayList() {

    }

    function makePlayListByDbClick() {
	var musicId = arguments.callee.caller.arguments[0];

	new PlayList([ musicId ], true);
    }

    function onClickDeleteBtn() {
	var checkBoxTagList = _musicListViewEl.getElementsByTagName("input"), deleteList = [], count = 0;

	for (var i = 0; i < checkBoxTagList.length; i++) {
	    if (checkBoxTagList[i].checked) {
		deleteList.push(checkBoxTagList[i]);
		++count;
	    }
	}

	if (!count) {
	    alert("삭제할 대상이 없습니다!");
	} else {
	    // TODO 삭제 진행
	}
    }

    function updateListView() {
	var listNameTobeShow = arguments.callee.caller.arguments[0];

	updateDisplayListView(listNameTobeShow);
    }

    function onClickTap(e) {
	if (e.target && e.target.className) {
	    updateDisplayListView(e.target.className);
	}
    }

    function updateDisplayListView(listNameTobeShow) {
	// 음원목록 혹은 재생목록의 display를 업데이트한다.
	var commonListView = document.getElementsByClassName("listView")[0], playListNames = Controller
		.getPlayListNames();

	playListNames.push("musicList");

	playListNames.forEach(function(playListName) {
		    if (playListName === listNameTobeShow) {
			_tapEl.getElementsByClassName(playListName)[0].style.backgroundColor = Const.selectedTapColor;
			commonListView.getElementsByClassName(playListName)[0].style.display = "block";
		    } else {
			_tapEl.getElementsByClassName(playListName)[0].style.backgroundColor = "";
			commonListView.getElementsByClassName(playListName)[0].style.display = "none";
		    }
		});
    }

    /***************************************************************************
     * private functions
     **************************************************************************/
    function _registerBtnHandler() {
	_makePlayListBtn.addEventListener("click", onClickMakePlayList);
	_deleteBtn.addEventListener("click", onClickDeleteBtn);
	document.body
		.addEventListener("makePlayListEvt", makePlayListByDbClick);
	document.body.addEventListener("updateListViewEvt", updateListView);
	_tapEl.addEventListener("click", onClickTap);
    }

    return {
	initialize : function() {
	    _registerBtnHandler();
	}
    }
});
