import React from "react";
import {  useParams } from "react-router-dom";
import Comment from "../Components/comments/Comment";


const CommentPage = () => {
  const  params  = useParams();
  // {console.log(JSON.stringify(params));}
  return (
    <div>
      <Comment id={params}/>

    </div>
  );
};

export default CommentPage;
