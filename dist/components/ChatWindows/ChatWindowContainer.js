"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _ChatWindowContainerModule = _interopRequireDefault(require("./ChatWindowContainer.module.css"));

var _ChatWindowsPortal = _interopRequireDefault(require("./../ChatWindowsPortal"));

var _ChatWindow = _interopRequireDefault(require("./ChatWindow/ChatWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatWindowContainer = function ChatWindowContainer(props) {
  return _react.default.createElement(_ChatWindowsPortal.default, null, _react.default.createElement("div", {
    className: _ChatWindowContainerModule.default.ChatWindowContainer
  }, props.friendsForChat.length === 0 ? _react.default.createElement("h1", null) : props.friendsForChat.map(function (_ref) {
    var userID = _ref.userID,
        username = _ref.username;
    return _react.default.createElement(_ChatWindow.default, {
      key: userID,
      userID: userID,
      username: username
    });
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  console.log("state");
  console.log(state);
  return {
    friendsForChat: state.selectedFriendsForChat
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ChatWindowContainer);

exports.default = _default;