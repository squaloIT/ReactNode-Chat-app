"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _WriteMessageToolbarModule = _interopRequireDefault(require("./WriteMessageToolbar.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WriteMessageToolbar = function WriteMessageToolbar(props) {
  return _react.default.createElement("div", {
    className: _WriteMessageToolbarModule.default.WriteMessageToolbar
  }, _react.default.createElement("span", {
    className: _WriteMessageToolbarModule.default.textarea
  }, _react.default.createElement("input", {
    type: "text"
  })), _react.default.createElement("span", {
    className: _WriteMessageToolbarModule.default.button
  }, _react.default.createElement("button", null, "GO!")));
};

var _default = WriteMessageToolbar;
exports.default = _default;