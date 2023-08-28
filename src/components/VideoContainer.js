import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { useDispatch } from 'react-redux'
import { searchResults } from '../utils/searchSlice'
import { useSearchParams } from 'react-router-dom'


const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  const dispatch = useDispatch()
 
  const [searchQuery, setSerachQuery] = useSearchParams('q')
  console.log(searchQuery)
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    const d = json.items.map(item => item.snippet.title)
    dispatch(searchResults(d))
  }

  useEffect(()=> {
    getVideos()
    
  }, [])


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