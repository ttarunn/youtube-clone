import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { useSelector } from 'react-redux';
const ChatMsg = ({ name, msg }) => {


  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const darkTheme = isDarkTheme ? 'shadow-white':''

  
  return (
    <div className={`mb-2 shadow-sm ${darkTheme}`}>
        <BiUserCircle
        size={'2rem'}
          className="ml-1 inline"
        />
        <span className='mx-2 font-bold'>{name}</span>
        <span>{msg}</span>
    </div>
  )
}

export default ChatMsg