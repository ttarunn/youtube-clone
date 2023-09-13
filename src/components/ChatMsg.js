import React from 'react'

const ChatMsg = ({ name, msg }) => {
  return (
    <div className='mb-2 shadow-sm'>
        <img
          className="w-8 ml-1 inline"
          alt='user'
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
        <span className='mx-2 font-bold'>{name}</span>
        <span>{msg}</span>
    </div>
  )
}

export default ChatMsg