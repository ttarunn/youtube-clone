import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    
    const { channelTitle, title, thumbnails } = video.snippet;
    const { viewCount } = video.statistics

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const width = isMenuOpen ? 'w-[14.4rem]' : 'w-[20rem] m-auto mb-4 sm:w-[18rem]';

    const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
    const darkTheme = isDarkTheme ? 'shadow-white shadow-sm':''

  if (video.id === undefined) return null
  return (
    <div className={`${width} shadow-md p-2 sm:m-2 rounded-lg ${darkTheme}`}>
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