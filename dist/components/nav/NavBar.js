"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var _NavBarModule = _interopRequireDefault(require("./NavBar.module.css"));

var _Items = _interopRequireDefault(require("./Items/Items"));

var _Logo = _interopRequireDefault(require("./Logo/Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar() {
  return _react.default.createElement("nav", {
    className: _NavBarModule.default.navbar
  }, _react.default.createElement(_Items.default, null), _react.default.createElement(_Logo.default, null));
};

var _default = NavBar;
exports.default = _default;