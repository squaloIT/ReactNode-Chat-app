"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _NavBar = _interopRequireDefault(require("./components/nav/NavBar"));

var _Chat = _interopRequireDefault(require("./components/Chat/Chat"));

require("./App.css");

var _ChatWindowContainer = _interopRequireDefault(require("./components/ChatWindows/ChatWindowContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Home = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./components/Home/Home"));
  });
});
var Profile = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./components/Profile/Profile"));
  });
});

function App() {
  return _react.default.createElement(_react.default.StrictMode, null, _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement("div", {
    className: "grid-container"
  }, _react.default.createElement(_NavBar.default, null), _react.default.createElement("div", {
    className: "main"
  }, _react.default.createElement(_react.Suspense, {
    fallback: _react.default.createElement("h1", null, "Neki markup koji ce se prikazati dok se ucitavati Details, odnosno razresava promise import-a")
  }, _react.default.createElement(_router.Router, null, _react.default.createElement(Home, {
    path: "/"
  }), _react.default.createElement(Profile, {
    path: "/Profile/:id"
  })))), _react.default.createElement(_Chat.default, null), _react.default.createElement(_ChatWindowContainer.default, null))));
}

var _default = App;
exports.default = _default;