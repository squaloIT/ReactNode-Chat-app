"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _UsernameToolbarModule = _interopRequireDefault(require("./UsernameToolbar.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsernameToolbar = function UsernameToolbar(_ref) {
  var username = _ref.username,
      userID = _ref.userID,
      onClickRemoveFriendFromCurrentChatList = _ref.onClickRemoveFriendFromCurrentChatList;
  return _react.default.createElement("div", {
    className: _UsernameToolbarModule.default["username-toolbar"]
  }, _react.default.createElement("span", {
    className: _UsernameToolbarModule.default.status + " " + _UsernameToolbarModule.default.online
  }), _react.default.createElement("span", {
    className: _UsernameToolbarModule.default.username
  }, username), _react.default.createElement("a", {
    className: _UsernameToolbarModule.default.close,
    onClick: function onClick(e) {
      e.preventDefault();
      onClickRemoveFriendFromCurrentChatList(userID);
    }
  }, "X"));
};

var mapActionsToProps = function mapActionsToProps(dispatch) {
  return {
    onClickRemoveFriendFromCurrentChatList: function onClickRemoveFriendFromCurrentChatList(id) {
      return dispatch({
        type: "REMOVE_FRIEND_FROM_SELECTED_FRIENDS_FOR_CHAT",
        payload: {
          userID: id
        }
      });
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapActionsToProps)(UsernameToolbar);

exports.default = _default;