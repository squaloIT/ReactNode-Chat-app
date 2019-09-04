"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChatModule = _interopRequireDefault(require("./Chat.module.css"));

var _FriendsList = _interopRequireDefault(require("./FriendsList/FriendsList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chat = function Chat(props) {
  return _react.default.createElement("div", {
    className: _ChatModule.default.chat
  }, _react.default.createElement("h1", null, "Friends online"), _react.default.createElement(_FriendsList.default, null));
};

var _default = Chat;
exports.default = _default;