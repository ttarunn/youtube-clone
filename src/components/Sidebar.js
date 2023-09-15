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
  
  if(!isMenuOpen) return null;

  return (
    <div className='w-44 flex flex-col m-3 p-4 sticky top-20 self-start'>
      <Link to={'/'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <BiHome size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Home</spna>
      </Link>
      <Link to={'/category?q=live'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <MdLiveTv size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Live</spna>
      </Link>
      <Link to={'/category?q=music'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <IoMdMusicalNote size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Music</spna>
      </Link>
      <Link to={'/category?q=movies'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <RiMovie2Line size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Movies</spna>
      </Link>
      <Link to={'/category?q=education'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <GiGraduateCap size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Education</spna>
      </Link>
      <Link to={'/category?q=Coding'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <BsCodeSlash size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Coding</spna>
      </Link>
      <Link to={'/category?q=podcast'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <MdOutlinePodcasts size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Podcast</spna>
      </Link>
      <Link to={'/category?q=aming'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <IoGameController size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Gaming</spna>
      </Link>
      <Link to={'/category?q=news'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <IoNewspaperSharp size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>News</spna>
      </Link>
      <Link to={'/category?q=sorts'} className='flex w-full border rounded-2xl p-2 mb-5 hover:bg-red-500 hover:text-white'>
        <MdSportsBaseball size={'2rem'}/><spna className='m-1 ml-2 font-bold text-xl'>Sports</spna>
      </Link>
    </div>
  )
}

export default Sidebar;