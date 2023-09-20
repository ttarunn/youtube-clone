import React from "react";
import { useSelector } from "react-redux";

const Comments = ({ data }) => {

  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const darkTheme = isDarkTheme ? 'bg-black text-white border-white':'border-black bg-slate-100'
  
  const { authorDisplayName, textOriginal, authorProfileImageUrl } = data;
  return (
    <div className={`w-[90%] sm:ml-3 m-1 mt-2 border-l-4 ${darkTheme}`}>
      <div className={`m-1 ${darkTheme}`}>
        <img
          className="w-10 ml-4 inline rounded-full mt-2"
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
    {/* <div className="sm:m-5 sm:pl-5">
      <CommentsList comments={comment.reply}/>
    </div> */}
  </div>
  );
};

export default CommentsList;
