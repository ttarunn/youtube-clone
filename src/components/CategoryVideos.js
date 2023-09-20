import React, { useEffect, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';
import { API_KEY } from '../utils/constants';
import CategoryCard from './CategoryCard';

const CategoryVideos = () => {

  const [videosByCategory, setVideosByCategory] = useState([])
  const [searchParams] = useSearchParams()
  const id = searchParams.get("q");

  async function getCategory(cat){
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${cat}type=video&regionCode=IN&key=${API_KEY}`);
    const json = await data.json();
    setVideosByCategory(json.items);
    
  }
  useEffect(()=> {
    getCategory(id);
  }, [id])


  return (
    <div>
      <div className='flex flex-wrap mt-3 sm:m-3 sm:mt-0'>
        {videosByCategory.map(video => <CategoryCard video={video} key={video.id.videoId}/>)}
      </div>
      <Outlet/>
    </div>
  )
}

export default CategoryVideos