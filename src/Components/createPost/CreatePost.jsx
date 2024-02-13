import React, { useState } from "react";
import "./createPost.css";
import PostText from "./PostText";
import { BsFillFileEarmarkPostFill, BsFileImage } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { FaPollH } from "react-icons/fa";
import { Divider, Typography } from "@mui/material";

const makeStyle = {
  borderBottom: "3px solid  rgb(0,121,211)",
  color: "rgb(0,121,211)",
};
const CreatePost = () => {
  const [postType, setPosttype] = useState("post");
  const handleClick = (e) => {
    setPosttype(e.target.id);
  };
  return (
    <>
      <div className="reddit_clone-create_post_head">
        <h3 style={{ fontWeight: 'bold' }}>Create a post </h3>
        <button style={{ color: 'rgb(0,121,211)' }}>
          Drafts<span style={{ color: "white", backgroundColor: 'grey' }}>0</span>{" "}
        </button>
      </div>
      {/* <Divider color={"wheat"}></Divider> */}
      <div className="reddit_clone-create_post_line"></div>
      <select name="" id="" className="reddit_clone-create_post_select">
        <option value="">Choose A Community</option>
        <option value="">User</option>
      </select>
      <div className="reddit_clone-create_post">
        <div className="reddit_clone-create_post_links">
          <button
            id="post"
            onClick={handleClick}
            style={postType === "post" ? makeStyle : {}}
          >
            <>

              <BsFillFileEarmarkPostFill></BsFillFileEarmarkPostFill> <Typography sx={{ fontWeight: 'bold' }} component={"span"} >Post</Typography>
            </>
          </button>
          <button
            id="img_video"
            onClick={handleClick}
            style={postType === "img_video" ? makeStyle : {}}
          >
            <BsFileImage /> <Typography sx={{ fontWeight: 'bold' }} component={"span"} >images&video</Typography>
          </button>
          <button
            id="link"
            onClick={handleClick}
            style={postType === "link" ? makeStyle : {}}
          >
            <HiLink /><Typography sx={{ fontWeight: 'bold' }} component={"span"} >Link</Typography>
          </button>
          <button
            id="poll"
            onClick={handleClick}
            style={postType === "poll" ? makeStyle : {}}
          >
            <FaPollH /> <Typography sx={{ fontWeight: 'bold' }} component={"span"} >Poll</Typography>
          </button>
        </div>
        <div className="reddit_clone-create_post_types">
          <PostText post={postType} />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
