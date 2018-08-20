require([ "app", "polyfill" ], function(App, Polyfill) {
//    dom이 로드된 후에 app을 실행시켜야 하나 문제가 있어 주석처리
//    window.addEventListener("DOMContentLoaded", function() {
//	new App().initialize();
//    });
    new App().initialize();
});