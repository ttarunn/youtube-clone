import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  
  if(!isMenuOpen) return null;

  return (
    <div className='w-56 shadow-lg mx-5 flex flex-col '>
      <div className='m-2 cursor-pointer'>
        <ul>
          <li to={'/'}><Link>Home</Link></li>
          
          <li>Shorts</li>
          <li>Live</li>
        </ul>
      </div>
      <div className='m-2 cursor-pointer'>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
          <li>Sports</li>
          <li>Watch Movies</li>
          <li>Gaming</li>
          <li>Music</li>
        </ul>
      </div>

      <div className='m-2 cursor-pointer'>
        <h1 className='font-bold pt-5'>Trending</h1>
        <ul>
          <li>Sports</li>
          <li>Watch Movies</li>
          <li>Gaming</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;