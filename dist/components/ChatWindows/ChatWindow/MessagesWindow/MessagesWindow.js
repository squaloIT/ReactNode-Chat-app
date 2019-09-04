"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MessagesWindowModule = _interopRequireDefault(require("./MessagesWindow.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessagesWindow = function MessagesWindow(props) {
  return _react.default.createElement("div", {
    className: _MessagesWindowModule.default.MessagesWindow
  }, _react.default.createElement("div", null, _react.default.createElement("span", {
    className: _MessagesWindowModule.default.friendMessage
  }, _react.default.createElement("p", null, "Text friend poruke poruke poruke poruke poruke poruke poruke"))), _react.default.createElement("div", null, _react.default.createElement("span", {
    className: _MessagesWindowModule.default.friendMessage
  }, _react.default.createElement("p", null, "Text friend poruke poruke poruke poruke poruke poruke poruke"))), _react.default.createElement("div", null, _react.default.createElement("span", {
    className: _MessagesWindowModule.default.myMessage
  }, _react.default.createElement("p", null, "Text moje poruke"))), _react.default.createElement("div", null, _react.default.createElement("span", {
    className: _MessagesWindowModule.default.myMessage
  }, _react.default.createElement("p", null, "Text moje poruke"))), " ", _react.default.createElement("div", null, _react.default.createElement("span", {
    className: _MessagesWindowModule.default.myMessage
  }, _react.default.createElement("p", null, "Text moje poruke"))));
};

var _default = MessagesWindow;
exports.default = _default;