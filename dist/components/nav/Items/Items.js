"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ItemsModule = _interopRequireDefault(require("./Items.module.css"));

var _Item = _interopRequireDefault(require("./Item/Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Items = function Items(props) {
  return _react.default.createElement("ul", {
    className: _ItemsModule.default.items
  }, _react.default.createElement(_Item.default, {
    path: "/",
    value: "Home"
  }), _react.default.createElement(_Item.default, {
    path: "/Profile/17",
    value: "Profile"
  }));
};

var _default = Items;
exports.default = _default;