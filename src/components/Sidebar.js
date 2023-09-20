import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
import { IoMdMusicalNote } from 'react-icons/io'
import { GiGraduateCap } from 'react-icons/gi'
import { BsCodeSlash } from 'react-icons/bs'
import { MdOutlinePodcasts, MdSportsBaseball, MdLiveTv } from 'react-icons/md'
import { RiMovie2Line } from 'react-icons/ri'
import { IoGameController, IoNewspaperSharp } from 'react-icons/io5'




const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  const iconCLass = "ml-2 font-bold text-xs sm:text-xl";
  const linkClass = 'flex w-full border rounded-2xl p-2 mb-3 hover:bg-red-500 hover:text-white'
  const iconSize = 'sm:text-3xl text-lg'
  if(!isMenuOpen) return null;

  return (
    <div className='sm:w-40 w-28 flex flex-col m-2 p-2 sticky top-20 self-start border-r-2 border-black '>
      <Link to={'/'} className={linkClass}>
        <BiHome className={iconSize}/><span className={iconCLass}>Home</span>
      </Link>
      <Link to={'/category?q=live'} className={linkClass}>
        <MdLiveTv className={iconSize}/><span className={iconCLass}>Live</span>
      </Link>
      <Link to={'/category?q=music'} className={linkClass}>
        <IoMdMusicalNote className={iconSize}/><span className={iconCLass}>Music</span>
      </Link>
      <Link to={'/category?q=movies'} className={linkClass}>
        <RiMovie2Line className={iconSize}/><span className={iconCLass}>Movies</span>
      </Link>
      <Link to={'/category?q=education'} className={linkClass}>
        <GiGraduateCap className={iconSize}/><span className={iconCLass}>Education</span>
      </Link>
      <Link to={'/category?q=coding'} className={linkClass}>
        <BsCodeSlash className={iconSize}/><span className={iconCLass}>Coding</span>
      </Link>
      <Link to={'/category?q=podcast'} className={linkClass}>
        <MdOutlinePodcasts className={iconSize}/><span className={iconCLass}>Podcast</span>
      </Link>
      <Link to={'/category?q=aming'} className={linkClass}>
        <IoGameController className={iconSize}/><span className={iconCLass}>Gaming</span>
      </Link>
      <Link to={'/category?q=news'} className={linkClass}>
        <IoNewspaperSharp className={iconSize}/><span className={iconCLass}>News</span>
      </Link>
      <Link to={'/category?q=sorts'} className={linkClass}>
        <MdSportsBaseball className={iconSize}/><span className={iconCLass}>Sports</span>
      </Link>
    </div>
  )
}

export default Sidebar;