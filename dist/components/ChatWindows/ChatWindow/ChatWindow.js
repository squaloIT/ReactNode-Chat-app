"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChatWindowModule = _interopRequireDefault(require("./ChatWindow.module.css"));

var _UsernameToolbar = _interopRequireDefault(require("./UsernameToolbar/UsernameToolbar"));

var _WriteMessageToolbar = _interopRequireDefault(require("./WriteMessageToolbar/WriteMessageToolbar"));

var _MessagesWindow = _interopRequireDefault(require("./MessagesWindow/MessagesWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatWindow = function ChatWindow(_ref) {
  var username = _ref.username,
      userID = _ref.userID;
  return _react.default.createElement("div", {
    className: _ChatWindowModule.default.ChatWindow
  }, _react.default.createElement(_UsernameToolbar.default, {
    username: username,
    userID: userID
  }), _react.default.createElement(_MessagesWindow.default, null), _react.default.createElement(_WriteMessageToolbar.default, null));
};

var _default = ChatWindow;
exports.default = _default;