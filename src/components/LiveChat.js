import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMsg from "./ChatMsg";
import { generateName, generateText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  
  useEffect(() => {
    const int = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message:
            generateText(5) +
            " " +
            generateText(4) +
            " " +
            generateText(6) +
            " " +
            generateText(7),
        })
      );
    }, 500);

    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <div>
      <div className="w-full h-[500px] border border-black bg-slate-100 ml-2 p-2 overflow-y-scroll flex flex-col-reverse rounded-md">
        {messages.map((msg, i) => (
          <ChatMsg key={i} name={msg.name} msg={msg.message} />
        ))}
      </div>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Live User",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-4/5 border border-black pl-2 ml-2 rounded-md"
          placeholder="Send Live Message"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-[16%] bg-orange-300 rounded-md">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
