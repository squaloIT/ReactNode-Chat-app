"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = {
  selectedFriendsForChat: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_SELECTED_FRIEND_TO_CHAT":
      //Ako vec postoji ne dodavati ga
      var mapped = state.selectedFriendsForChat.map(function (e) {
        return e.userID;
      });

      if (!mapped.includes(action.payload.userID)) {
        var newArr = _toConsumableArray(state.selectedFriendsForChat);

        newArr.push({
          userID: action.payload.userID,
          username: action.payload.username
        });
        state = _objectSpread({}, state, {
          selectedFriendsForChat: newArr
        });
      }

      console.log(state.selectedFriendsForChat); //! OBAVEZNO SA RETURN VRATITI STANJE

      return _objectSpread({}, state);

    case "REMOVE_FRIEND_FROM_SELECTED_FRIENDS_FOR_CHAT":
      var filterFriends = state.selectedFriendsForChat.filter(function (friend) {
        return friend.userID !== action.payload.userID;
      });
      console.log(filterFriends); // state = {
      //   ...state,
      //   selectedFriendsForChat: filterFriends
      // };

      return _objectSpread({}, state, {
        selectedFriendsForChat: filterFriends
      });

    default:
      return state;
  }
};

var _default = reducer;
exports.default = _default;