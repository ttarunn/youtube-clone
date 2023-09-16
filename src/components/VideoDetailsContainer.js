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
    ? "p-2 rounded-full ml-8 font-semibold bg-black border-2 border-white"
    : "p-2 rounded-full ml-8 font-semibold bg-slate-100";

  return (
    <div>
      <h2 className="font-bold text-xl mb-5">{title}</h2>
      <div className="flex mb-6 ">
        <BiUserCircle size={"2rem"} />
        <h2 className="font-bold ml-1 mr-40">{channelTitle}</h2>
        <button className={btnClass}>Subscribe</button>
        <button className={btnClass}>
          <BiLike className="inline" />
          {likeCount} | <BiDislike className="inline" />
        </button>
        <button className={btnClass}>
          <PiShareFat size={"1.6rem"} className="inline" /> Share
        </button>
      </div>
      
      <div className={`p-4 rounded-lg text-justify m-2 ${darkTheme}`}>
      <h3 className="font-bold mb-4">{viewCount} views  || {publishedAt} Published</h3>
        {description}
      </div>
    </div>
  );
};

export default VideoDetailsContainer;
