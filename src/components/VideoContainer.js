import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items)
  }

  useEffect(()=> {
    getVideos()
    
  }, [])

  // console.log(video)
  if(videos.length === 0) return null

  return (
    <>
    <div className='flex flex-wrap m-2 w-auto'>
      {videos.map(video => <VideoCard video={video} key={video.id}/>)}
    </div>
    
    </>
  )
}

export default VideoContainer;