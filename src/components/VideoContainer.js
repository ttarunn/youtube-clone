import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from '../utils/appSlice'


const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  const dispatch = useDispatch();

  const videosStore = useSelector(store => store.app.videos);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    
    dispatch(addVideos(json.items))
  }

  useEffect(()=> {
    getVideos()
  }, [])


  if(videos.length === 0) return null

  return (
    <>
    <div className='flex flex-wrap mt-3 sm:m-3 sm:mt-0'>
      {videos.map(video => <VideoCard video={video} key={video.id}/>)}
    </div>
    
    </>
  )
}

export default VideoContainer;