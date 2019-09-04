"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterModule = _interopRequireDefault(require("./Footer.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react.default.createElement("div", {
    className: _FooterModule.default.footer
  }, _react.default.createElement("p", null, "footer"));
};

var _default = Footer;
exports.default = _default;