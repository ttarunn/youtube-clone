import React from "react";

const Comments = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className='w-3/5'>
      <div className="border-l-4 border-black m-1 bg-gray-50">
        <img
          className="w-10 ml-4 inline"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
        <span className="mx-2 font-semibold text-lg">{name}</span>
        <p className="ml-16">{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, idx) => 
  <div key={idx}>
    <Comments  data={comment} />
    <div className="m-5 pl-5">
      <CommentsList comments={comment.reply}/>
    </div>
  </div>
  );
};

export default CommentsList;
