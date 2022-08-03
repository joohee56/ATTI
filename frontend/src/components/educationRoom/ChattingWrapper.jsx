import React, { useEffect, useState } from "react";
import Chatting from "./chatting";

const ChattingWrapper = ({ chatList, anonymouseMode }) => {
  const [chatting, setChatting] = useState([]);
  // console.log(chatList);

  useEffect(() => {
    setChatting((prev) => {
      return [...prev, chatList];
    });
  }, [chatList]);
  console.log(chatting);
  return (
    <div>
      {chatting.map((e, i) => (
        <div key={i}>
          <Chatting
            type={e.type}
            nickname={e.from}
            data={e.message}
            anonymouseMode={anonymouseMode}
          />
        </div>
      ))}
    </div>
  );
};

export default ChattingWrapper;
