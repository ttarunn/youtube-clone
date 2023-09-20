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
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const darkTheme = isDarkTheme ? 'bg-black text-white border-white':'border-black bg-slate-100'
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
      <div className={`sm:w-full h-[500px] border ml-2 p-2 overflow-y-scroll flex flex-col-reverse rounded-md ${darkTheme} w-[22rem]`}>
        {messages.map((msg, i) => (
          <ChatMsg key={i} name={msg.name} msg={msg.message} />
        ))}
      </div>
      <form
        className={`w-full ml-2 rounded-md ${darkTheme}`}
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
          className={`w-4/5 border pl-2 rounded-md ${darkTheme}`}
          placeholder="Send Live Message"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-[19.5%] bg-orange-300 rounded-md">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
