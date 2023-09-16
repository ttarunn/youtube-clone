import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  
  return (
    <div className={isDarkTheme ? 'flex bg-black text-white' : 'flex'}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body