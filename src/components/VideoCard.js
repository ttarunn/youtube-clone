import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    
    const { channelTitle, title, thumbnails } = video.snippet;
    const { viewCount } = video.statistics

    const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
    const darkTheme = isDarkTheme ? 'shadow-white shadow-sm':''
  if (video.id === undefined) return null
  return (
    <div className={`w-[14.4rem] shadow-md p-2 m-2 rounded-lg ${darkTheme}`}>
      <Link to={"watch?v="+video.id}>
        <img src={thumbnails.medium.url} className='rounded-lg hover:opacity-60'/>
        <h1 className='font-bold m-1 overflow-hidden'>{title}</h1>
        <h3 className='text-gray-500'>{channelTitle}</h3>
        <h3 className='text-gray-500'>{viewCount} views</h3>
      </Link>
    </div>
  )
}

export default VideoCard