import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import CommentsList from './Comments'
import LiveChat from './LiveChat'
import { getComments } from '../utils/helper'
const Watch = () => {
  const [comments, setComments] = useState([])
  const [searchParams] = useSearchParams()
  const id = searchParams.get("v")

  async function cmnts(){
    const cmnt = await getComments(id);
    console.log(cmnt)
    setComments(cmnt)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    cmnts()
  }, [])
  return (
    <div>
      <div className='flex'>
      <div>
        <iframe
          
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           />
      </div>
      <div className='w-full'>
        <LiveChat />
      </div>
      </div>
      <div>
          <h1 className='font-bold text-2xl m-4'>Comments</h1>
          <CommentsList comments={comments}/>
        </div>
    </div>
  )
}

export default Watch