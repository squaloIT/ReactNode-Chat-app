"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var _ItemModule = _interopRequireDefault(require("./Item.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(props) {
  return _react.default.createElement("li", {
    className: _ItemModule.default.item
  }, _react.default.createElement(_router.Link, {
    to: props.path
  }, props.value));
};

var _default = Item;
exports.default = _default;