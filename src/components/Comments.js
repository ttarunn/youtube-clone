import React from "react";

const Comments = ({ data }) => {
  console.log(data)
  const { authorDisplayName, textOriginal, authorProfileImageUrl } = data;
  return (
    <div className='w-3/5 ml-5 border-l-4 border-black'>
      <div className=" m-1 bg-gray-50">
        <img
          className="w-10 ml-4 inline rounded-full"
          src={authorProfileImageUrl}
        />
        <span className="mx-2 font-semibold text-lg">{authorDisplayName}</span>
        <p className="ml-16">{textOriginal}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => 
  <div key={comment.id}>
    <Comments  data={comment.snippet.topLevelComment.snippet} />
    <div className="m-5 pl-5">
      {/* <CommentsList comments={comment.reply}/> */}
    </div>
  </div>
  );
};

export default CommentsList;
