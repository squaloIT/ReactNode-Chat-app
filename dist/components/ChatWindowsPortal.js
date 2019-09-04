"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ChatWindowsPortal = function ChatWindowsPortal(props) {
  var divRef = (0, _react.useRef)(null);

  if (!divRef.current) {
    divRef.current = document.createElement("div");
  }

  console.log("ChatWindowsPortal - JA SE IZVRSAVAM");
  (0, _react.useEffect)(function () {
    console.log("USE EFFECT - JA SE IZVRSAVAM");
    var floatingChatDiv = document.getElementById("floating-chat");
    floatingChatDiv.appendChild(divRef.current);
    return function () {
      floatingChatDiv.removeChild(divRef.current);
    };
  }, []);
  return (0, _reactDom.createPortal)(_react.default.createElement("div", null, props.children), divRef.current);
};

var _default = ChatWindowsPortal;
exports.default = _default;