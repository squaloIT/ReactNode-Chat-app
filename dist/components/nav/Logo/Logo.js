"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LogoModule = _interopRequireDefault(require("./Logo.module.css"));

var _logo = _interopRequireDefault(require("./../../../assets/logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(props) {
  return _react.default.createElement("div", {
    className: _LogoModule.default.Logo
  }, _react.default.createElement("img", {
    src: _logo.default,
    alt: "Logo "
  }));
};

var _default = Logo;
exports.default = _default;