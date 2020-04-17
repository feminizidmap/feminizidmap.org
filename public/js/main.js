"use strict";

var _core = _interopRequireDefault(require("@barba/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// basic default transition (with no rules and minimal hooks)
_core.default.init({
  transitions: [{
    leave(_ref) {// do something with `current.container` for your leave transition
      // then return a promise or use `this.async()`

      let {
        current,
        next,
        trigger
      } = _ref;
    },

    enter(_ref2) {// do something with `next.container` for your enter transition
      // then return a promise or use `this.async()`

      let {
        current,
        next,
        trigger
      } = _ref2;
    }

  }]
});