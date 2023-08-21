import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Music", "Movies", "News", "Gaming", "Nature", "Sports", "Live", "Comedy", "Life Style", "Devotional", "Mixes", "Computer Programming", "Stand-Up Comedy", "Mythology"];

  return (
      
      <div className=" w-[1200px] overflow-x-scroll max-sm:w-1/2 ">
      <div className="flex items-center h-16 p-2 m-3 whitespace-nowrap gap-2">
        {list.map((btn) => (
          <Button key={btn} name={btn} />
        ))}
      </div>
    </div>
  )
}

export default ButtonList