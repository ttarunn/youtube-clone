import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    

    const { channelTitle, title, thumbnails } = video.snippet;
    const { viewCount } = video.statistics

    
  return (
    <div className='w-64 shadow-md p-2 m-2 rounded-lg'>
      <Link to={"watch?v="+video.id}>
        <img src={thumbnails.medium.url} className='rounded-lg'/>
        <h1 className='font-bold m-1'>{title}</h1>
        <h3 className='text-gray-500'>{channelTitle}</h3>
        <h3 className='text-gray-500'>{viewCount} views</h3>
      </Link>
    </div>
  )
}

export default VideoCard