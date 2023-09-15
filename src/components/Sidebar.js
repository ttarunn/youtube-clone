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
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  const iconCLass = "ml-2 font-bold text-xl";
  const linkClass='flex w-full border rounded-2xl p-2 mb-3 hover:bg-red-500 hover:text-white'
  if(!isMenuOpen) return null;

  return (
    <div className='w-40 flex flex-col m-2 p-2 sticky top-20 self-start border-r-2 border-black'>
      <Link to={'/'} className={linkClass}>
        <BiHome size={'1.6rem'}/><span className={iconCLass}>Home</span>
      </Link>
      <Link to={'/category?q=live'} className={linkClass}>
        <MdLiveTv size={'1.6rem'}/><span className={iconCLass}>Live</span>
      </Link>
      <Link to={'/category?q=music'} className={linkClass}>
        <IoMdMusicalNote size={'1.6rem'}/><span className={iconCLass}>Music</span>
      </Link>
      <Link to={'/category?q=movies'} className={linkClass}>
        <RiMovie2Line size={'1.6rem'}/><span className={iconCLass}>Movies</span>
      </Link>
      <Link to={'/category?q=education'} className={linkClass}>
        <GiGraduateCap size={'1.6rem'}/><span className={iconCLass}>Education</span>
      </Link>
      <Link to={'/category?q=coding'} className={linkClass}>
        <BsCodeSlash size={'1.6rem'}/><span className={iconCLass}>Coding</span>
      </Link>
      <Link to={'/category?q=podcast'} className={linkClass}>
        <MdOutlinePodcasts size={'1.6rem'}/><span className={iconCLass}>Podcast</span>
      </Link>
      <Link to={'/category?q=aming'} className={linkClass}>
        <IoGameController size={'1.6rem'}/><span className={iconCLass}>Gaming</span>
      </Link>
      <Link to={'/category?q=news'} className={linkClass}>
        <IoNewspaperSharp size={'1.6rem'}/><span className={iconCLass}>News</span>
      </Link>
      <Link to={'/category?q=sorts'} className={linkClass}>
        <MdSportsBaseball size={'1.6rem'}/><span className={iconCLass}>Sports</span>
      </Link>
    </div>
  )
}

export default Sidebar;