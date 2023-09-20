import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addVideos, closeMenu } from "../utils/appSlice";
import CommentsList from "./Comments";
import LiveChat from "./LiveChat";
import { getComments } from "../utils/helper";
import { YOUTUBE_VIDEO_API, YOUTUBE_VIDEO_BY_ID } from "../utils/constants";
import VideoCard from './VideoCard'
import VideoDetailsContainer from "./VideoDetailsContainer";

const Watch = () => {
  const [comments, setComments] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [videos, setVideos] = useState([]);

  const videosStore = useSelector(store => store.app.videos);


  async function cmnts(id) {
    const cmnt = await getComments(id);
    setComments(cmnt);
  }
  async function getVideoDetails(id) {
    const videoData = await fetch(YOUTUBE_VIDEO_BY_ID + id);
    const videoJSON = await videoData.json();
    setVideoDetails(videoJSON.items);
  };

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    
    dispatch(addVideos(json.items))
  }

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails(id);
    cmnts(id);
    if(videosStore.length > 0){
      setVideos(videosStore[0])
    }else{
      getVideos();
    }
  }, []);
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-[800px] w-[24rem]">
          <iframe
            
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-lg m-2 sm:w-[800px] h-[32rem] w-[24rem]"
          />
          <div className={`m-2`}>
            {videoDetails.length && (
              <VideoDetailsContainer details={videoDetails[0]} />
            )}
          </div>
        </div>
        <div className="sm:w-full m-2 w-[22rem]">
          <LiveChat />
          {/* {videos.length && videos.map(video => <VideoCard video={video} key={video.id}/>)} */}
        </div>
        
      </div>
      
      <div className="m-4">
        <span className="font-bold text-2xl m-4">
          {videoDetails[0]?.statistics?.commentCount} Comments
        </span>
        <CommentsList comments={comments} />
      </div>
    </div>
  );
};

export default Watch;
