import React from "react";
import { BiUserCircle, BiLike, BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { useSelector } from "react-redux";
const VideoDetailsContainer = ({ details }) => {
  
  const { title, channelTitle, description, publishedAt } = details?.snippet;
  const { likeCount, viewCount } = details?.statistics;

  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const darkTheme = isDarkTheme
    ? "bg-black text-white border border-white"
    : "border border-black bg-slate-100";

  const btnClass = isDarkTheme
    ? "sm:p-2 p-1 rounded-xl sm:rounded-full sm:ml-8 ml-1 font-semibold bg-black border-2 border-white sm:w-40"
    : "sm:p-2 p-1 rounded-xl sm:rounded-full sm:ml-8 ml-1 font-semibold bg-slate-100 sm:w-40";

  return (
    <div className="w-full p-2">
      <h2 className="font-bold text-xl mb-5 ">{title}</h2>
      <div className="flex mb-6 ">
        <BiUserCircle size={"2rem"} />
        <h2 className="font-bold ml-1 sm:mr-40">{channelTitle}</h2>
        <button className={btnClass}>Subscribe</button>
        <button className={btnClass}>
          <BiLike className="inline" />
          {likeCount} | <BiDislike className="inline" />
        </button>
        <button className={btnClass}>
          <PiShareFat size={"1.6rem"} className="inline" /> Share
        </button>
      </div>
      
      <div className={`p-4 rounded-lg text-justify sm:m-2 ${darkTheme}`}>
      <h3 className="font-bold mb-4">{viewCount} views  || Published On: {publishedAt}</h3>
      <p className="overflow-hidden sm:w-full">{description}</p>
      </div>
    </div>
  );
};

export default VideoDetailsContainer;
