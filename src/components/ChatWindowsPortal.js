import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ChatWindowsPortal = props => {
  const divRef = useRef(null);

  if (!divRef.current) {
    divRef.current = document.createElement("div");
  }
  console.log("ChatWindowsPortal - JA SE IZVRSAVAM");

  useEffect(() => {
    console.log("USE EFFECT - JA SE IZVRSAVAM");
    const floatingChatDiv = document.getElementById("floating-chat");
    floatingChatDiv.appendChild(divRef.current);

    return () => {
      floatingChatDiv.removeChild(divRef.current);
    };
  }, []);

  return createPortal(<div>{props.children}</div>, divRef.current);
};

export default ChatWindowsPortal;
