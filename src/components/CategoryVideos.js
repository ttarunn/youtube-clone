import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import { useSearchParams } from 'react-router-dom';
import { API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';

const CategoryVideos = () => {

  const [videosByCategory, setVideosByCategory] = useState([])
  const [searchParams] = useSearchParams()
  const id = searchParams.get("q");

  async function getCategory(cat){
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q${cat}type=video&regionCode=IN&key=${API_KEY}`);
    const json = await data.json();
    setVideosByCategory(json.items);
    
    console.log(json.items)
  }
  useEffect(()=> {
    getCategory(id);
  }, [id])


  return (
    <div>
      <ButtonList/>
      {/* {videosByCategory.map(video => <VideoCard video={video} key={video.id}/>)} */}
    </div>
  )
}

export default CategoryVideos