"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FriendItemModule = _interopRequireDefault(require("./FriendItem.module.css"));

var _profileImg = _interopRequireDefault(require("./../../../../assets/profile-img.jpg"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FriendItem = function FriendItem(props) {
  // SAMO AKO SU ONLINE PRIKAZATI IH
  return _react.default.createElement("div", {
    className: _FriendItemModule.default.FriendItem,
    onClick: function onClick() {
      return props.onAddFriendToList(props.userID, props.username);
    }
  }, _react.default.createElement("img", {
    src: _profileImg.default,
    alt: "Little profile photo"
  }), _react.default.createElement("div", null, _react.default.createElement("p", {
    className: _FriendItemModule.default.friendName
  }, props.username), _react.default.createElement("p", {
    className: _FriendItemModule.default.onlineStatus
  }, props.status)));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAddFriendToList: function onAddFriendToList(id, username) {
      dispatch({
        type: "ADD_SELECTED_FRIEND_TO_CHAT",
        payload: {
          userID: id,
          username: username
        }
      });
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(FriendItem);

exports.default = _default;