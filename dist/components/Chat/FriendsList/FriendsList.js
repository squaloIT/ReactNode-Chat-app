"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FriendsListModule = _interopRequireDefault(require("./FriendsList.module.css"));

var _FriendItem = _interopRequireDefault(require("./FriendItem/FriendItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FriendsList = function FriendsList(props) {
  return _react.default.createElement("div", {
    className: _FriendsListModule.default.FriendsList
  }, _react.default.createElement(_FriendItem.default, {
    username: "Petar Petrovic",
    status: "Online",
    userID: "1"
  }), _react.default.createElement(_FriendItem.default, {
    username: "Ana Ivanovic",
    status: "Offline",
    userID: "2"
  }), _react.default.createElement(_FriendItem.default, {
    username: "Nikola Mihajlovic",
    status: "Online",
    userID: "3"
  }), _react.default.createElement(_FriendItem.default, {
    username: "Andrijana Petakovic",
    status: "Online",
    userID: "4"
  }), _react.default.createElement(_FriendItem.default, {
    username: "Stevan Sremac",
    status: "Offline",
    userID: "5"
  }), _react.default.createElement(_FriendItem.default, {
    username: "Vojin Raznjatovic",
    status: "Offline",
    userID: "6"
  }), _react.default.createElement(_FriendItem.default, {
    username: "Aleksa Vukajlic",
    status: "Online",
    userID: "7"
  }));
};

var _default = FriendsList;
exports.default = _default;