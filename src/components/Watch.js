import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import Comments from './Comments'

const Watch = () => {
  const comments = [{
    name: 'Tarun',
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    reply: {
      name: 'Tarun',
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    }
  }]
  const [searchParams] = useSearchParams()
  const id = searchParams.get("v")
  console.log(id)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div>
      <div>
        <iframe
          className='m-4'
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen />
      </div>
      <div>
        <div>
          <h1 className='font-bold text-2xl m-4'>Comments</h1>
          {comments.map(comments => 
          <>
          <Comments comments={comments} />
          <Comments comments={comments.reply}/>
          </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Watch