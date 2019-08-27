import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ChatWindows = props => {
  const divRef = useRef(null);

  if (!divRef.current) {
    divRef.current = document.createElement("div");
  }

  useEffect(() => {
    const floatingChatDiv = document.getElementById("floating-chat");
    floatingChatDiv.appendChild(divRef.current);

    return () => {
      floatingChatDiv.removeChild(divRef.current);
    };
  }, []);

  return createPortal(<div>{props.children}</div>, divRef.current);
};

export default ChatWindows;
