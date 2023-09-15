import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
const ChatMsg = ({ name, msg }) => {
  return (
    <div className='mb-2 shadow-sm'>
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