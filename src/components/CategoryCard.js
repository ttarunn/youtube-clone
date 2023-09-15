import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CategoryCard = ({ video }) => {
    
    const {thumbnails, channelTitle, title} = video.snippet
    const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
    const darkTheme = isDarkTheme ? 'shadow-white shadow-sm':''

  return (
    <div className={`w-[14.4rem] shadow-md p-2 m-2 rounded-lg ${darkTheme}`}>
      <Link to={"/watch?v="+video.id.videoId}>
        <img src={thumbnails.medium.url} className='rounded-lg hover:opacity-60'/>
        <h1 className='font-bold m-1 overflow-hidden'>{title}</h1>
        <h3 className='text-gray-500'>{channelTitle}</h3>
      </Link>
    </div>
    
  )
}

export default CategoryCard 