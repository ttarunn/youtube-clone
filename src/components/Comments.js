import React from 'react'

const Comments = ({ comments }) => {
  const { name, comment } = comments
  return (
    <div>
      <div className='border-l-4 border-black m-1 bg-gray-50'>
        <img className="w-10 ml-4 inline" src='https://cdn-icons-png.flaticon.com/512/552/552721.png' />
        <span className='mx-2 font-semibold text-lg'>{name}</span>
        <p className='ml-16'>{comment}</p>
      </div>
    </div>
  )
}

export default Comments