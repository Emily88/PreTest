(function () {
  "use strict";

  function _polyFillForCustomEvt() {
    // IE에서 CustomEvent 생성자를 사용할 수 없으므로 polyfill함수 생성.
    if (typeof window.CustomEvent === "function") {
      return false;
    }

    function CustomEvent(event, params) {
      var finalParams = params || { bubbles: false, cancelable: false, detail: undefined },
        evt = document.createEvent('CustomEvent');

      evt.initCustomEvent(event, finalParams.bubbles, finalParams.cancelable, finalParams.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  }

  _polyFillForCustomEvt();
})();